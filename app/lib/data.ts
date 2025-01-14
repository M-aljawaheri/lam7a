import { sql } from "@vercel/postgres";
import { Journal } from "./definitions";

const BASE_IMAGE_URL = "https://web2.qatar.cmu.edu/~mjawaher/lam7a/covers/";
const BASE_PDF_URL = "https://web2.qatar.cmu.edu/~mjawaher/lam7a/journals/";

export async function fetchJournals(): Promise<Array<Journal>> {
  try {
    const data = await sql`SELECT * FROM journals`;
    return data.rows as Array<Journal>;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch journal data");
  }
}

/**
 *
 */
export const insertJournal = async (
  journalNum: number,
  month: string,
  file: any
) => {
  const name = `Issue${journalNum}`;
  const filename = `issue${journalNum}`;
  const imageurl = `${BASE_IMAGE_URL}${filename}.jpg`;
  const pdfurl = `${BASE_PDF_URL}${filename}.pdf`;

  console.error(
    `Inserting Journal entry: ${name} for month ${month}, links: ${imageurl}`
  );

  try {
    await sql`
        INSERT INTO journals (name, imageurl, pdfurl, month)
        VALUES (${name}, ${imageurl}, ${pdfurl}, ${month})
        ON CONFLICT (name) DO NOTHING;
      `;
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

    if (result !== null && result.rowCount > 0) {
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
