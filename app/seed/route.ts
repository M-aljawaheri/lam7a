import { db } from "@vercel/postgres";
import { sliderItems } from "@/data/sliderItems";

export async function GET() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;

    // Create the SliderItems table with the updated schema
    await client.sql`
      CREATE TABLE IF NOT EXISTS journals (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        pdfurl TEXT NOT NULL UNIQUE,
        imageurl TEXT NOT NULL UNIQUE,
        month VARCHAR(10) NOT NULL
      );
    `;

    // Insert slider items
    for (const item of sliderItems) {
      await client.sql`
        INSERT INTO journals (name, pdfurl, imageurl, month)
        VALUES (${item.name}, ${item.pdfurl}, ${item.imageurl}, ${item.month})
        ON CONFLICT (name) DO NOTHING;
      `;
      console.log(`Inserted: ${item.name}`);
    }

    await client.sql`COMMIT`;

    return new Response(
      JSON.stringify({ message: "Database seeded successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Seeding error:", error);
    await client.sql`ROLLBACK`;
    return new Response(JSON.stringify({ error: "Seeding failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    client.release();
  }
}
