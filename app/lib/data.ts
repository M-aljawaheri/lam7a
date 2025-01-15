import SftpClient from "ssh2-sftp-client";
import { Journal } from "./definitions";
import { sql } from "@vercel/postgres";
import * as path from "path"; // Add this import

const AFS_CONFIG = {
  host: "unix.qatar.cmu.edu",
  username: process.env.AFS_USERNAME,
  password: process.env.AFS_PASSWORD,
  // Paths relative to home directory for SFTP upload
  baseImagePath: "www/lam7a/covers/",
  basePdfPath: "www/lam7a/journals/",
};

// Web-accessible URLs
const BASE_IMAGE_URL = "https://web2.qatar.cmu.edu/~mjawaher/lam7a/covers/";
const BASE_PDF_URL = "https://web2.qatar.cmu.edu/~mjawaher/lam7a/journals/";

interface UploadResult {
  imageUrl: string;
  pdfUrl: string;
}

export const uploadToAFS = async (
  file: File,
  coverImage: File | null,
  journalNum: number
): Promise<UploadResult> => {
  const sftp = new SftpClient();

  try {
    console.log("Attempting to connect to SFTP...");
    // connect to AFS
    await sftp.connect({
      host: AFS_CONFIG.host,
      username: AFS_CONFIG.username,
      password: AFS_CONFIG.password,
    });
    console.log("Connected successfully to SFTP");

    const pdfFilename = `issue${journalNum}.pdf`;
    const imageFilename = `issue${journalNum}.jpg`;

    // relative paths from home directory
    const pdfPath = path.posix.join(AFS_CONFIG.basePdfPath, pdfFilename);
    const imagePath = path.posix.join(AFS_CONFIG.baseImagePath, imageFilename);

    const pdfBuffer = await file.arrayBuffer();
    await sftp.put(Buffer.from(pdfBuffer), pdfPath);

    let imageUrl = "";
    if (coverImage) {
      const imageBuffer = await coverImage.arrayBuffer();
      await sftp.put(Buffer.from(imageBuffer), imagePath);
      imageUrl = `${BASE_IMAGE_URL}${imageFilename}`;
    }

    const pdfUrl = `${BASE_PDF_URL}${pdfFilename}`;

    return {
      imageUrl,
      pdfUrl,
    };
  } catch (error: any) {
    console.error("Detailed error:", error);
    if (error.message) console.error("Error message:", error.message);
    if (error.code) console.error("Error code:", error.code);
    throw error;
  } finally {
    await sftp.end();
  }
};

export const insertJournal = async (
  journalNum: number,
  month: string,
  file: File,
  coverImage?: File
) => {
  const name = `Issue${journalNum}`;

  try {
    // Upload files to AFS first
    const { imageUrl, pdfUrl } = await uploadToAFS(
      file,
      coverImage || null,
      journalNum
    );

    // Insert into database
    await sql`
      INSERT INTO journals (name, imageurl, pdfurl, month)
      VALUES (${name}, ${imageUrl}, ${pdfUrl}, ${month})
      ON CONFLICT (name) DO NOTHING;
    `;

    return { name, imageUrl, pdfUrl, month };
  } catch (error) {
    console.error("Error inserting journal:", error);
    throw error;
  }
};

export const deleteJournalByName = async (name: string): Promise<boolean> => {
  try {
    const result = await sql`
        DELETE FROM journals
        WHERE name = ${name}
        RETURNING *;
      `;

    if (result !== null && result.rowCount !== null && result.rowCount > 0) {
      return true;
    } else {
      console.warn(`No journal found with name: ${name}`);
      return false;
    }
  } catch (error) {
    console.error("Error deleting journal:", error);
    throw error;
  }
};

export async function fetchJournals(): Promise<Journal[]> {
  try {
    const data = await sql`SELECT * FROM journals`;
    return data.rows as Journal[];
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch journal data");
  }
}
