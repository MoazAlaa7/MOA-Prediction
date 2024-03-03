"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { ComboboxDemo } from '@/components/ui/comboBox';
import FormGenerator from './form-generator/page';
import styles from './prediction.module.css';
import Papa from 'papaparse';



const acceptableCSVFileTypes = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";



const Prediction = () => {
  const [requirementsMet, setRequirementsMet] = useState("");
  const [firstRowColumnNames, setFirstRowColumnNames] = useState("");
  const [filePathInputValue, setFilePathInputValue] = useState(null);

  const shouldDisableUpload = () => {
    return requirementsMet === "no" || firstRowColumnNames === "no";
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    setFilePathInputValue(file);
    
  };

  return (
    <div className={` ${styles.padding_div} mx-auto px-4 rounded-lg  shadow-lg bg-gray-100`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-8">Requirements</h2>
          <ul className="list-disc list-inside">
            <li className='mb-4'>File size is less than 25MB</li>
            <li className='mb-4'> File has at least x columns</li>
            <li className='mb-4'>First row is column names</li>
            <li className='mb-4'>First column is not an ID or equivalent</li>
          </ul>
        </div>

        <div className="bg-white p-6  rounded-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="fileInput" className="block mb-2">
                <Image src='/images/upload.png' width={30} height={30} alt="download logo"/> 
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
              <label className="block  mt-4 mb-4">Are all requirements met?</label>
              <ComboboxDemo  selectedValue={requirementsMet} onSelect={value => setRequirementsMet(value) } />   
            </div>
            <div className="mb-6">
              <label className="block mt-4 mb-4">Is the first row column names?</label>
              <ComboboxDemo selectedValue={firstRowColumnNames} onSelect={value => setFirstRowColumnNames(value)} />
            </div>
          </form>
          <FormGenerator filePathInputValue={filePathInputValue} shouldDisableUpload={shouldDisableUpload} />
        </div>
      </div>
    </div>
  );
}

export default Prediction;
