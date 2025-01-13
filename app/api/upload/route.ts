// app/api/upload/route.ts

import { NextResponse } from "next/server";
import formidable from "formidable";
import { insertJournal } from "../../../lib/data";

// Disable Next.js's default body parser to handle file uploads with formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Parses the incoming form data using formidable.
 * @param req - The incoming request.
 * @returns A promise that resolves with the parsed fields and files.
 */
const parseForm = (req: Request) => {
  const form = formidable({ multiples: false });
  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
    (resolve, reject) => {
      form.parse(req as any, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    }
  );
};

/**
 * Handles the POST request to upload a PDF and insert a new journal entry.
 * @param req - The incoming request.
 * @returns A JSON response indicating success or failure.
 */
export async function POST(req: Request) {
  try {
    const { fields, files } = await parseForm(req);
    const month = fields.month as string;
    const pdfFile = files.pdf as formidable.File;

    if (!month || !pdfFile) {
      return NextResponse.json(
        { error: "Month and PDF file are required." },
        { status: 400 }
      );
    }

    // Fetch current journals to find the max ID
    const client = await db.connect();
    const result = await client.sql`SELECT MAX(id) as maxId FROM journals;`;
    const maxId = result.rows[0]?.maxid || 0;
    const newId = maxId + 1;

    // Construct image and link paths
    const imagePath = `/journals/issue${newId}.jpg`; // Placeholder path
    const pdfPath = `issue${newId}.pdf`; // Placeholder link

    // Insert the new journal entry
    await insertJournal(newId, imagePath, pdfPath);

    return NextResponse.json(
      { message: "Journal entry inserted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { error: "Failed to upload journal." },
      { status: 500 }
    );
  }
}
