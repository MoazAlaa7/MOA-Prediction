"use client"
import { useState } from "react";
import SectionOne from "./sections/sectionOne";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import SectionFour from "./sections/sectionFour";

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
                className={`flex items-center gap-3 rounded-lg  border mb-10 px-10 py-2 text-gray-900 transition-all ${selectedContent === 'sectionOne' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                href="#"
                onClick={() => handleContentChange("sectionOne")}
              >
                Home
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 border mb-10 py-2 text-gray-900 transition-all ${selectedContent === 'sectionTwo' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                href="#"
                onClick={() => handleContentChange("sectionTwo")}
              >
                Articles
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 border mb-10 py-2 text-gray-900 transition-all ${selectedContent === 'sectionThree' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                href="#"
                onClick={() => handleContentChange("sectionThree")}
              >
                Messages
              </a>
              <a
                className={`flex items-center gap-3 rounded-lg px-10 py-2 border mb-10 text-gray-900 transition-all ${selectedContent === 'sectionFour' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                href="#"
                onClick={() => handleContentChange("sectionFour")}
              >
                Calendar
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-3 lg:ml-auto">
            {/* Header navigation */}
          </nav>
        </header>
        <main className="flex-1 grid min-h-[calc(100vh_-_1rem)] gap-4 p-4 md:grid-cols-[250px_1fr] md:gap-6 lg:gap-8 md:p-6">
          {/* Content based on selection */}
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
