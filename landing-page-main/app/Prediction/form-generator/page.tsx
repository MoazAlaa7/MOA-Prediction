// import React, { useState } from 'react';
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Button } from '@/components/ui/button';
// import axios from 'axios';
// import Papa from 'papaparse';

// type Props = {
//   filePathInputValue: string;
//   shouldDisableUpload: () => boolean;
// };

// const FormGenerator = ({ filePathInputValue, shouldDisableUpload }: Props) => {
//   const [open, setOpen] = useState(false);
//   const [firstRow, setFirstRow] = useState<any[]>([]); // State to store the first row data

//   const handleClickOpen = () => {
//     setOpen(true);
//     Papa.parse(filePathInputValue, {
//       skipEmptyLines: true,
//       header: true,
//       complete: function(results: any) {
//         console.log(results.data);
//         axios.post('http://localhost:5000/upload', { data: results.data })
//           .then(response => {
//             console.log(response.data);
//             const firstRowData = response.data.first_row;
//             setFirstRow(firstRowData); // Set the first row data to the state
//           })
//           .catch(error => {
//             console.error('Error uploading file:', error);
//           });
//       }
//     });
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <Button className={` bg-blue-500 mt-10 ${shouldDisableUpload() ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleClickOpen}>Check result</Button>
//       <DialogContent className='sm:max-w-[1500px] h-[70vh] '>
//         <div>
//           <h2>File path Input Value: </h2>
//           <div className="flex flex-row h-full">
//             <div className="w-3/10 p-4 bg-white dark:bg-slate-900  h-full">
//               <div className=''>
//                 <h2 className="text-lg font-bold mb-4">Requirements</h2>
//                 <ul>
//                   <li> ✔ The file size is less than 25mb</li>
//                   <li> ✔ file has at-least x columns</li>
//                   <li> ✔ first row is columns names </li>
//                   <li> ❌ first column is id or equivalent</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="w-8/10 p-4 w-full dark:bg-slate-950 bg-gray-100 h-full">
//               <div className=''>
//                 <h2 className="text-lg font-bold mb-4">Result</h2>
//                 <div>
//                     <table className="table-auto">
//                           <thead>
//                             <tr>
//                               {Object.keys(firstRow).map((key) => (
//                                 <th key={key} className="border px-0 py-2">{key}</th>
//                               ))}
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               {Object.values(firstRow).map((value, index) => (
//                                 <td key={index} className="border px-0 py-2">{value}</td>
//                               ))}
//                             </tr>
//                           </tbody>
//                         </table>
//                     </div>3
//               </div>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default FormGenerator;