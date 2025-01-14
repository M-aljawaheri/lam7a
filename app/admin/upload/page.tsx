"use client";

import React, { useState } from "react";

/**
 * UploadPage Component
 * Renders a form to upload a PDF and enter the month with consistent styling.
 */
const UploadPage = () => {
  const [month, setMonth] = useState("");
  const [pdf, setPdf] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Handles form submission.
   * Sends the PDF and month to the API route using Promises.
   * @param e - Form event
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission behavior

    if (!pdf) {
      setMessage("Please select a PDF file to upload.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("pdf", pdf);
    formData.append("month", month);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            return data;
          } else {
            throw new Error(data.error || "Something went wrong.");
          }
        });
      })
      .then((data) => {
        setMessage(data.message || "Journal uploaded successfully.");
        setMonth("");
        setPdf(null);
        // Reset the file input value
        const fileInput = document.getElementById("pdf") as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }
      })
      .catch((error) => {
        console.error("Upload Error:", error);
        setMessage(error.message || "Failed to upload journal.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="z-10 flex flex-col justify-center items-center w-full p-8 text-center bg-[#EAB58B] min-h-screen">
      <h1 className="z-20 uppercase text-white lg:text-8xl text-4xl font-bold mb-4 drop-shadow-xl">
        Upload Journal
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md"
      >
        {/* Month Input */}
        <div className="mb-4">
          <label
            htmlFor="month"
            className="block text-sm font-medium text-white mb-2"
          >
            Month
          </label>
          <input
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., January"
          />
        </div>

        {/* PDF Upload */}
        <div className="mb-6">
          <label
            htmlFor="pdf"
            className="block text-sm font-medium text-white mb-2"
          >
            Select PDF
          </label>
          <input
            type="file"
            id="pdf"
            accept="application/pdf"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setPdf(e.target.files[0]);
              }
            }}
            required
            className="w-full text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded hover:from-green-500 hover:to-blue-600 transition-colors duration-300 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* Message Display */}
      {message && <p className="mt-6 text-white text-lg">{message}</p>}
    </div>
  );
};

export default UploadPage;
