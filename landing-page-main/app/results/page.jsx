// pages/results.jsx
"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import styles from "./results.module.css";

const Results = () => {
  const [previewData, setPreviewData] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");

  useEffect(() => {
    const fetchPreviewData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/preview");
        setPreviewData(response.data);
      } catch (error) {
        console.error("Error fetching preview data:", error);
      }
    };

    fetchPreviewData();
  }, []);

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
    }
  };

  const renderPreviewTable = () => {
    if (!previewData || previewData.length === 0) {
      return null;
    }

    const headers = Object.keys(previewData[0]);
    const previewRows = previewData.slice(0, 10); // Display only the first 10 rows

    return (
      <table className={`${styles.table} min-w-full bg-white border-collapse border border-gray-200`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className={`${styles.thLight} py-2 px-4 border border-gray-200`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {previewRows.map((row, rowIndex) => (
            <tr key={rowIndex} className={`${styles.trHover} hover:bg-gray-100`}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className={`${styles.tdLight} py-2 px-4 border border-gray-200`}>
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
    <div className={`${styles.resultsContainer} mx-auto px-4 rounded-lg shadow-lg`}>
      <div className={`${styles.flex} ${styles.flexRow}`}>
        <div className={`${styles.w1_4} ${styles.bgGray200} ${styles.p6} ${styles.roundedLg}`}>
          <ul>
            <li className={`${styles.mb4} ${styles.cursorPointer}`} onClick={() => setActiveTab("preview")}>Preview Data</li>
            <li className={`${styles.mb4} ${styles.cursorPointer}`} onClick={() => setActiveTab("tab2")}>Tab 2</li>
            <li className={`${styles.mb4} ${styles.cursorPointer}`} onClick={() => setActiveTab("tab3")}>Tab 3</li>
          </ul>
        </div>
        <div className={`${styles.w3_4} ${styles.p6}`}>
          {activeTab === "preview" && (
            <div>
              <h2 className={`${styles.text2xl} ${styles.fontSemibold} ${styles.mb4}`}>Prediction Preview</h2>
              <h3 className={`${styles.mb2} ${styles.italic}`} style={{ color: '#718096' }}>Showing only 10 rows</h3>
              <div className={styles.overflowXAuto}>{renderPreviewTable()}</div>
              <Button onClick={handleDownload} className="mt-4">Download Results</Button>
            </div>
          )}
          {activeTab === "tab2" && <div>Tab 2 Content</div>}
          {activeTab === "tab3" && <div>Tab 3 Content</div>}
        </div>
      </div>
    </div>
  );
};

export default Results;
