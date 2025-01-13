import { db } from "@vercel/postgres";
import { sliderItems } from "@/data/sliderItems";

export async function GET() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;

    // Create the SliderItems table
    await client.sql`
        CREATE TABLE IF NOT EXISTS SliderItems (
          id SERIAL PRIMARY KEY,
          image VARCHAR(255) NOT NULL UNIQUE,
          link VARCHAR(255) NOT NULL UNIQUE
        );
      `;

    // Insert slider items
    for (const item of sliderItems) {
      await client.sql`
          INSERT INTO SliderItems (image, link)
          VALUES (${item.image}, ${item.link})
          ON CONFLICT DO NOTHING;
        `;
      console.log(`Inserted: ${item.image}, ${item.link}`);
    }

    await client.sql`COMMIT`;

    return Response.json(
      { message: "Database seeded successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Seeding error:", error);
    await client.sql`ROLLBACK`;
    return Response.json({ error: "Seeding failed" }, { status: 500 });
  } finally {
    client.release();
  }
}
