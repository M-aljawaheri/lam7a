import JournalList from "@/app/components/JournalList";
import { fetchJournals } from "@/app/lib/data";
import { Journal } from "@/app/lib/definitions";
import { extractId } from "@/app/lib/util";
import { ToastContainer } from "react-toastify";

export const revalidate = 0;

const DeletePage = async () => {
  // fetch journals here server side
  let journals: Journal[] = [];
  try {
    journals = await fetchJournals();
    journals = journals.sort((a, b) => extractId(b) - extractId(a));
  } catch (error) {
    console.error("Failed to fetch journals:", error);
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="flex flex-col justify-center items-center text-center bg-customOrange min-h-screen p-4">
        <h1 className="text-white uppercase font-bold tracking-tight mb-8 text-2xl md:text-5xl lg:text-7xl">
          Delete Journal
        </h1>
        <JournalList journals={journals} />
      </div>
    </>
  );
};

export default DeletePage;
