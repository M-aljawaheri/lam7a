import { NextRequest, NextResponse } from "next/server";
import { deleteJournalByName } from "@/app/lib/data";

export async function POST(req: NextRequest) {
  try {
    // parse body
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Journal ID is required." },
        { status: 400 }
      );
    }

    const success = await deleteJournalByName(name as string);
    if (success) {
      return NextResponse.json(
        { message: "Journal deleted successfully." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Journal not found." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Deletion Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
