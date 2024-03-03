// pages/index.jsx
"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./dataPage.module.css"; // Import the CSS module
import Problem from "../problem/page";
import Article from "./sections/sectionOne";
import SectionOne from "./sections/sectionOne";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import SectionFour from "./sections/sectionFour";
import Image from "next/image";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const AnalysisPage = () => {
 const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <div>


      <div className={styles.container}>
        {" "}
        {/* Use the CSS module */}
        <nav className={styles.toc_container}>
          {" "}
          {/* Use the new container */}
          <p className="text-2xl  font-semibold">Table of</p>
          <h1 className="text-2xl font-semibold mb-10"> Content</h1>
          <ul className={styles.toc}>
            {" "}
            {/* Use the CSS module for styling */}
            <li
              className={activeSection === "section1" ? styles.active : ""}
              onClick={() => scrollToSection("section1")}
            >
              1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categorical
              features
            </li>
            <li
              className={activeSection === "section2" ? styles.active : ""}
              onClick={() => scrollToSection("section2")}
            >
              2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gene
              Expression levels features
            </li>
            <li
              className={activeSection === "section3" ? styles.active : ""}
              onClick={() => scrollToSection("section3")}
            >
              3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cell
              viability features
            </li>
            <li
              className={activeSection === "section4" ? styles.active : ""}
              onClick={() => scrollToSection("section4")}
            >
              4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Target
              variables
            </li>
          </ul>
        </nav>
        <main className={styles.content}> {/* Use the CSS module */}
            <div className={`${styles.header} flex flex-col items-center justify-center`}>
              <Image src="/images/20945567s.png" width={800} height={800} alt="logo" />
                <div className='text-center '>

                  <div className='text-3xl font-semibold'>Analysis and Visualization</div>
                  
                  <p className='text-3xl flex justify-center gap-3'> </p>
                </div>
             </div>
          <section className={styles.section} id="section1">
            <SectionOne />
          </section>
          <section className={styles.section} id="section2">

            <SectionTwo />
          </section>
          <section  className={styles.section}id="section3">

            <SectionThree />
          </section>
          <section  className={styles.section}id="section4">
          
            <SectionFour/>
            
          </section>
        </main>
      </div>
    </div>
  );
};

export default AnalysisPage;
