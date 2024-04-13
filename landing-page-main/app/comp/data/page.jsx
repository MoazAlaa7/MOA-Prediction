"use client"
import { useState } from "react";
import SectionOne from "./sections/sectionOne"
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import dynamic from "next/dynamic";
import styles from "./dataPage.module.css"
import SectionFour from "./sections/sectionFour";
function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
  <div>
  <nav className={`md:flex md:flex-col md:w-64 border-r border-gray-200 p-4 overflow-y-auto fixed top-0 left-0 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} dark:border-gray-800`}>

    <div className={`${styles.nav} grid md:gap-2.5 md:grid-cols-1 lg:grid-cols-none lg:gap-0`}>
      <a href="#sectionOne" className={`${styles.navlink} md:block`}>Categorical Features</a>
      <a href="#sectionTwo" className={`${styles.navlink} md:block`}>Gene Expression Levels Features</a>
      <a href="#sectionThree" className={`${styles.navlink} md:block`}>Cell Viability Features</a>
      <a href="#sectionFour" className={`${styles.navlink} md:block`}>Target Variables</a>
    </div>

  </nav>
</div>
  <main className={`${styles.contnet} flex-1 py-4 md:py-6 lg:py-12 md:px-6 ml-0 md:ml-64 pr-8`}>
    <div className="max-w-3xl mx-auto grid gap-4">
      <div id="sectionOne" className="section-container">
        <SectionOne />
      </div>
      <div id="sectionTwo" className="section-container">
        <SectionTwo />
      </div>
      <div id="sectionThree" className="section-container">
        <SectionThree />
      </div>
      <div id="sectionFour" className="section-container">
        <SectionFour />
      </div>
    </div>
  </main>
</div>



  );
}



export default dynamic (() => Promise.resolve(Sidebar), {ssr: false})
