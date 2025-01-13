import { sql } from "@vercel/postgres";
import { Journal } from "./definitions";
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
 * Inserts a new journal entry into the database.
 * @param id - The unique ID for the journal.
 * @param image - The image path for the journal cover.
 * @param link - The PDF link for the journal.
 */
export const insertJournal = async (
  id: number,
  image: string,
  link: string
) => {
  try {
    await sql`
        INSERT INTO journals (id, image, link)
        VALUES (${id}, ${image}, ${link})
        ON CONFLICT (id) DO NOTHING;
      `;
  } catch (error) {
    console.error("Error inserting journal:", error);
    throw error;
  }
};
