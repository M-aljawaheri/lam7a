"use client";

import React, { useState } from "react";
import JournalDeleteCard from "@/app/components/JournalDeleteCard";
import { Journal } from "@/app/lib/definitions";
import { toast } from "react-toastify"; // Optional: For user feedback

interface JournalListProps {
  journals: Journal[];
}

const JournalList: React.FC<JournalListProps> = ({ journals }) => {
  const [journalList, setJournalList] = useState<Journal[]>(journals);

  const handleJournalDelete = async (journal: Journal) => {
    // confirm first
    const confirm = window.confirm(
      `Are you sure you want to delete ${journal.name}?`
    );
    if (!confirm) return;

    try {
      const res = await fetch("/api/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: journal.name }),
      });

      const data = await res.json();

      if (res.ok) {
        // remove from list for immediate feedback
        // remember we got this list initially from server side..
        setJournalList((prev) => prev.filter((j) => j.name !== journal.name));
        toast.success(data.message || "Journal deleted successfully.");
      } else {
        toast.error(data.error || "Failed to delete journal.");
      }
    } catch (error) {
      console.error("Deletion Error:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {journalList.map((journal) => (
        <JournalDeleteCard
          key={journal.name}
          journal={journal}
          onDelete={handleJournalDelete}
        />
      ))}
    </div>
  );
};

export default JournalList;
