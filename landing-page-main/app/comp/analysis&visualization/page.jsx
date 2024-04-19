"use client"
import { useState } from "react";
import SectionOne from "./sections/sectionOne";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import SectionFour from "./sections/sectionFour";
import { FaCalendar, FaHome } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import styles from './dataPage.module.css'
import { MdArticle } from "react-icons/md";

function Sidebar() {
 const [selectedContent, setSelectedContent] = useState("sectionOne");

  const handleContentChange = (contentId) => {
    setSelectedContent(contentId);
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">

              <a
                className={`flex items-center gap-3 rounded-lg border mb-10 px-10 py-2 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionOne' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionOne")}
              >
                <FaHome className="mr-2"/>Home
              </a>
                <a
                  className={`flex items-center gap-3 rounded-lg border mb-10 px-10 py-2 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionTwo' ? styles.selected : ''}`}
                  href="#"
                  onClick={() => handleContentChange("sectionTwo")}
                >
                <MdArticle className="mr-2"/>Articles
              </a>
              <a
                className={`flex items-center gap-3   rounded-lg px-10 border mb-10 py-2 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionThree' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionThree")}
              >
                <TiMessages className="mr-2"/>Messages
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 dark:text-white text-gray-900 transition-all ${styles.link} ${selectedContent === 'sectionFour' ? styles.selected : ''}`}
                href="#"
                onClick={() => handleContentChange("sectionFour")}
              >
                <FaCalendar className="mr-2"/> Calendar
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
      <header className="flex h-14 items-center gap-4 border-b border-gray-300 dark:border-gray-700 bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-3 lg:ml-auto">
                {/* Header navigation */}
          </nav>
        </header>
        <main className={`flex-1 grid min-h-[calc(100vh - 1rem)]  gap-4 p-4 md:grid-cols-[250px_1fr] md:gap-6 lg:gap-8 md:p-6 ${styles['main-content']}`}>       {/* Content based on selection */}
          {selectedContent === "sectionOne" && <SectionOne />}
          {selectedContent === "sectionTwo" && <SectionTwo />}
          {selectedContent === "sectionThree" && <SectionThree />}
          {selectedContent === "sectionFour" && <SectionFour />}
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
