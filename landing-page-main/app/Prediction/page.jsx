"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ComboboxDemo } from "@/components/ui/comboBox";
import styles from "./prediction.module.css";

const acceptableCSVFileTypes =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";

const Prediction = () => {
  const [requirementsMet, setRequirementsMet] = useState("");
  const [firstRowColumnNames, setFirstRowColumnNames] = useState("");
  const [filePathInputValue, setFilePathInputValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileReady, setFileReady] = useState(false);

  const shouldDisableUpload = () => {
    return requirementsMet === "no" || firstRowColumnNames === "no" || loading;
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFilePathInputValue(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", filePathInputValue);

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFileReady(true);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setLoading(false);
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
    }
  };

  return (
    <div
      className={` ${styles.padding_div} mx-auto px-4 rounded-lg  shadow-lg dark:bg-indigo-950 `}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 dark:bg-indigo-950 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-8">Requirements</h2>
          <ul className="list-disc list-inside">
            <li className="mb-4">File size is less than 25MB</li>
            <li className="mb-4"> File has at least x columns</li>
            <li className="mb-4">First row is column names</li>
            <li className="mb-4">First column is not an ID or equivalent</li>
          </ul>
        </div>

        <div className=" p-6  dark:bg-black  rounded-lg">
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
                className="border border-gray-300 p-2 w-full rounded-lg   mb-4"
              />
            </div>
            <div className="mb-6">
              <label className="block mt-4 mb-4">
                Are all requirements met?
              </label>
              <ComboboxDemo
                selectedValue={requirementsMet}
                onSelect={(value) => setRequirementsMet(value)}
              />
            </div>
            <div className="mb-6">
              <label className="block mt-4 mb-4">
                Is the first row column names?
              </label>
              <ComboboxDemo
                selectedValue={firstRowColumnNames}
                onSelect={(value) => setFirstRowColumnNames(value)}
              />
            </div>
            {!fileReady ? (
              <button type="submit" disabled={shouldDisableUpload() || loading}>
                {loading ? "Loading..." : "Submit"}
              </button>
            ) : (
              <button onClick={handleDownload}>Download Results</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prediction;

////////////////////////////////////////////////////////
// "use client";
// import React, { useState } from "react";
// import axios from "axios";

// function UploadPage() {
//   const [file, setFile] = useState(null);
//   const [predictionData, setPredictionData] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setPredictionData(response.data);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Page</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Submit</button>
//       </form>

//       {predictionData && (
//         <div>
//           <h2>Prediction Results</h2>
//           <table>
//             <thead>
//               <tr>
//                 {Object.keys(predictionData[0]).map((key) => (
//                   <th key={key}>{key}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {predictionData.map((row, index) => (
//                 <tr key={index}>
//                   {Object.values(row).map((value, index) => (
//                     <td key={index}>{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UploadPage;

// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import axios from 'axios';
// import { ComboboxDemo } from '@/components/ui/comboBox';
// import FormGenerator from './form-generator/page';
// import styles from './prediction.module.css';
// import Papa from 'papaparse';

// const acceptableCSVFileTypes = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";

// const Prediction = () => {
//   const [requirementsMet, setRequirementsMet] = useState("");
//   const [firstRowColumnNames, setFirstRowColumnNames] = useState("");
//   const [filePathInputValue, setFilePathInputValue] = useState(null);

//   const shouldDisableUpload = () => {
//     return requirementsMet === "no" || firstRowColumnNames === "no";
//   };

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];

//     setFilePathInputValue(file);

//   };

//   return (
//     <div className={` ${styles.padding_div} mx-auto px-4 rounded-lg  shadow-lg dark:bg-indigo-950 `}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-gray-200 dark:bg-indigo-950 p-6 rounded-lg">
//           <h2 className="text-2xl font-semibold mb-8">Requirements</h2>
//           <ul className="list-disc list-inside">
//             <li className='mb-4'>File size is less than 25MB</li>
//             <li className='mb-4'> File has at least x columns</li>
//             <li className='mb-4'>First row is column names</li>
//             <li className='mb-4'>First column is not an ID or equivalent</li>
//           </ul>
//         </div>

//         <div className=" p-6  dark:bg-black  rounded-lg">
//           <form>
//             <div className="mb-6">
//               <label htmlFor="fileInput" className="block mb-2">
//                 <Image src='/images/upload.png' width={30} height={30} alt="download logo"/>
//                 Upload File
//               </label>
//               <input
//                 type="file"
//                 id="fileInput"
//                 name="fileInput"
//                 accept={acceptableCSVFileTypes}
//                 onChange={handleFileInputChange}
//                 className="border border-gray-300 p-2 w-full rounded-lg   mb-4"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block  mt-4 mb-4">Are all requirements met?</label>
//               <ComboboxDemo  selectedValue={requirementsMet} onSelect={value => setRequirementsMet(value) } />
//             </div>
//             <div className="mb-6">
//               <label className="block mt-4 mb-4">Is the first row column names?</label>
//               <ComboboxDemo selectedValue={firstRowColumnNames} onSelect={value => setFirstRowColumnNames(value)} />
//             </div>
//           </form>
//           <FormGenerator filePathInputValue={filePathInputValue} shouldDisableUpload={shouldDisableUpload} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prediction;
