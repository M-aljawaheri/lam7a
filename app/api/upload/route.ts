// app/api/upload/route.ts

import { NextResponse } from "next/server";
import { fetchJournals, insertJournal } from "@/app/lib/data";
import { findMaxId } from "@/app/lib/util";

/**
 * Handles the POST request to upload a PDF and insert a new journal entry.
 * @param req - The incoming request.
 * @returns A JSON response indicating success or failure.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("pdf");
    const month = formData.get("month");

    if (!file || !month) {
      throw "Invalid input";
    }

    const sliderItems = await fetchJournals();
    const maxId = findMaxId(sliderItems);
    const entryNum = maxId + 1;

    // Insert the new journal entry
    await insertJournal(entryNum, month as string, file);

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
