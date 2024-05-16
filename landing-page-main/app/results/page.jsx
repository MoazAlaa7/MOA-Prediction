"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import styles from "./results.module.css";

const Results = () => {
  const [previewData, setPreviewData] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");
  const [top20SVG, setTop20SVG] = useState(null);
  const [lowest20SVG, setLowest20SVG] = useState(null);
  const [isSVGFetched, setIsSVGFetched] = useState(false);

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

  useEffect(() => {
    const fetchSVGs = async () => {
      try {
        const top20Response = await axios.get(
          "http://localhost:5000/top_20_svg"
        );
        setTop20SVG(top20Response.data.svg);

        const lowest20Response = await axios.get(
          "http://localhost:5000/lowest_20_svg"
        );
        setLowest20SVG(lowest20Response.data.svg);

        setIsSVGFetched(true);
      } catch (error) {
        console.error("Error fetching SVGs:", error);
      }
    };

    if (activeTab === "Insights" && !isSVGFetched) {
      fetchSVGs();
    }
  }, [activeTab, isSVGFetched]);

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
      <table
        className={`${styles.table} min-w-full bg-white border-collapse border border-gray-200`}
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`${styles.thLight} py-2 px-4 border border-gray-200`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {previewRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${styles.trHover} hover:bg-gray-100`}
            >
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className={`${styles.tdLight} py-2 px-4 border border-gray-200`}
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const navItems = [
    { name: "Preview", tab: "preview" },
    { name: "Insights", tab: "Insights" },
    { name: "Tab 3", tab: "tab3" },
  ];

  return (
    <div
      className={`${styles.resultsContainer} mx-auto px-4 rounded-lg shadow-lg`}
    >
      <div className={`${styles.flex} ${styles.flexRow}`}>
        <div className={`${styles.sidebar} dark:${styles.sidebarDark}`}>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <div
                key={item.tab}
                className={`${styles.navItem} ${
                  activeTab === item.tab ? styles.navItemActive : ""
                } dark:${
                  activeTab === item.tab ? styles.navItemDarkActive : ""
                }`}
                onClick={() => setActiveTab(item.tab)}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.w3_4}>
          {activeTab === "preview" && (
            <div>
              <h2
                className={`${styles.text2xl} ${styles.fontSemibold} ${styles.mb4}`}
              >
                Prediction Preview
              </h2>
              <h3 className={styles.italic}>Showing only 10 rows</h3>
              <div className={styles.overflowXAuto}>{renderPreviewTable()}</div>
              <Button onClick={handleDownload} className="mt-4">
                Download Full Results
              </Button>
            </div>
          )}
          {activeTab === "Insights" && (
            <div>
              <h2
                className={`${styles.text2xl} ${styles.fontSemibold} ${styles.mb4}`}
              >
                Prediction Insights
              </h2>
              <h3
                className={`${styles.mb2} ${styles.italic}`}
                style={{ color: "#718096" }}
              >
                Some valuable insights about the prediction results
              </h3>
              <div className="space-y-6">
                {top20SVG && (
                  <div className={styles.insightBox}>
                    <h3
                      className={`${styles.textXl} ${styles.fontSemibold} ${styles.mb2}`}
                    >
                      Top 20 Targets
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: atob(top20SVG) }}
                      className={styles.insightImage}
                    />
                  </div>
                )}
                {lowest20SVG && (
                  <div className={styles.insightBox}>
                    <h3
                      className={`${styles.textXl} ${styles.fontSemibold} ${styles.mb2}`}
                    >
                      Lowest 20 Targets
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: atob(lowest20SVG) }}
                      className={styles.insightImage}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          {activeTab === "tab3" && <div>Tab 3 Content</div>}
        </div>
      </div>
    </div>
  );
};

export default Results;
