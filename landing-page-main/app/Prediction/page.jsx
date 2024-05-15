// pages/prediction/page.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ComboboxDemo } from "@/components/ui/comboBox";
import styles from "./prediction.module.css";
import { Button } from "@/components/ui/button";

const acceptableCSVFileTypes = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";

const Prediction = () => {
  const [requirementsMet, setRequirementsMet] = useState("");
  const [firstRowColumnNames, setFirstRowColumnNames] = useState("");
  const [filePathInputValue, setFilePathInputValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileReady, setFileReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const shouldDisableUpload = () => {
    return (
      requirementsMet !== "yes" ||
      firstRowColumnNames !== "yes" ||
      !filePathInputValue ||
      loading
    );
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFilePathInputValue(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("file", filePathInputValue);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.file_ready) {
        setFileReady(true);
        setLoading(false);
        router.push("/results"); // Navigate to the results page
      } else {
        setLoading(false);
        setErrorMessage("File processing failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setErrorMessage("Error uploading file. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.padding_div} mx-auto px-4 rounded-lg shadow-lg dark:bg-indigo-950`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 dark:bg-indigo-950 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-8">Requirements</h2>
          <ul className="list-disc list-inside">
            <li className="mb-4">File size is less than 25MB</li>
            <li className="mb-4">File has at least x columns</li>
            <li className="mb-4">First row is column names</li>
          </ul>
        </div>

        <div className="p-6 dark:bg-black rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="fileInput" className="block mb-2">
                <Image
                  src="/images/upload.png"
                  width={30}
                  height={30}
                  alt="download logo"
                />
                Upload File
              </label>
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                accept={acceptableCSVFileTypes}
                onChange={handleFileInputChange}
                className="border border-gray-300 p-2 w-full rounded-lg mb-4"
              />
            </div>
            <div className="mb-6">
              <label className="block mt-4 mb-4">Are all requirements met?</label>
              <ComboboxDemo
                selectedValue={requirementsMet}
                onSelect={(value) => setRequirementsMet(value)}
              />
            </div>
            <div className="mb-6">
              <label className="block mt-4 mb-4">Is the first row column names?</label>
              <ComboboxDemo
                selectedValue={firstRowColumnNames}
                onSelect={(value) => setFirstRowColumnNames(value)}
              />
            </div>
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <Button type="submit" disabled={shouldDisableUpload() || loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
