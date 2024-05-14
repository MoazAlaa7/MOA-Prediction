"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Modal from "react-modal";
import { ComboboxDemo } from "@/components/ui/comboBox";
import styles from "./prediction.module.css";
import { Button } from "@/components/ui/button";

const acceptableCSVFileTypes =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '60%',
    overflowY: 'auto',
    width: '60%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fdfdfd',
    color: '#1f2937',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
};

const Prediction = () => {
  const [requirementsMet, setRequirementsMet] = useState("");
  const [firstRowColumnNames, setFirstRowColumnNames] = useState("");
  const [filePathInputValue, setFilePathInputValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileReady, setFileReady] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        fetchPreviewData();
      }
      setLoading(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setErrorMessage("Error uploading file. Please try again.");
      setLoading(false);
    }
  };

  const fetchPreviewData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/preview");
      setPreviewData(response.data);
      openModal();
    } catch (error) {
      console.error("Error fetching preview data:", error);
      setErrorMessage("Error fetching preview data. Please try again.");
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:5000/download", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "prediction.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
      setErrorMessage("Error downloading file. Please try again.");
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const renderPreviewTable = () => {
    if (!previewData || previewData.length === 0) {
      return null;
    }

    const headers = Object.keys(previewData[0]);
    const previewRows = previewData.slice(0, 10); // Display only the first 10 rows

    return (
      <table className="min-w-full bg-white dark:bg-gray-800 border-collapse border border-gray-200  dark:border-gray-700">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 border border-gray-200 dark:border-gray-700 bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-300">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {previewRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border border-gray-200 dark:border-gray-700">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className={` ${styles.padding_div} mx-auto px-4 rounded-lg shadow-lg dark:bg-indigo-950 `}>
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
            {!fileReady ? (
              <Button type="submit" disabled={shouldDisableUpload() || loading}>
                {loading ? "Loading..." : "Submit"}
              </Button>
            ) : (
              <>
                <Button onClick={handleDownload}>Download Results</Button>
              </>
            )}
          </form>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Prediction Preview"
      >
        <h2 className="text-2xl font-semibold mb-4">Prediction Preview</h2>
      <h3 className="text-sm mb-2" style={{ fontStyle: 'italic', color: '#718096' }}>Showing only 10 rows</h3>        <div className="overflow-x-auto">
          {renderPreviewTable()}
        </div>
        <button onClick={closeModal} className="mt-4 p-2 bg-blue-500 text-white rounded">Close</button>
      </Modal>
    </div>
  );
};

// export default Prediction;
