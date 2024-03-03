"use client"
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./useCases.module.css"; // Import the CSS module

import Image from "next/image";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const UseCases = () => {
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
        <nav className={styles.toc_container}>
          <p className="text-2xl font-semibold">Table of</p>
          <h1 className="text-2xl font-semibold mb-10"> Content</h1>
                    <ul className={styles.toc}>
                      <li
                        className={activeSection === "section1" ? styles.active : ""}
                        onClick={() => scrollToSection("section1")}
                      >
                        1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diabetes-related agents:
                        <ul className={styles.subtitle} >
                          <li>
                            alpha reductase inhibitor
                          </li>
                          <li>
                            Acetylcholinesterase inhibitor

                          </li>
                          <li>
                            Akt inhibitor

                          </li>
                          <li>
                            Androgen receptor agonist/antagonist


                          </li>
                          <li>
                            Glucocorticoid receptor agonist


                          </li>
                          <li>
                            Insulin secretagogue


                          </li>
                          <li>
                            Insulin sensitizer


                          </li>
                          <li>
                            Dipeptidyl peptidase inhibitor


                          </li>
                          <li>
                            Peroxisome proliferator-activated receptor (PPAR) agonist/antagonist


                          </li>
                        </ul>
                      </li>

            <li
              className={activeSection === "section2" ? styles.active : ""}
              onClick={() => scrollToSection("section2")}
            >
              2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gene
              Expression levels features
              <span className={styles.subtitle}>Subtitle for Section 2</span>
            </li>
            <li
              className={activeSection === "section3" ? styles.active : ""}
              onClick={() => scrollToSection("section3")}
            >
              3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cell
              viability features
              <span className={styles.subtitle}>Subtitle for Section 3</span>
            </li>
            <li
              className={activeSection === "section4" ? styles.active : ""}
              onClick={() => scrollToSection("section4")}
            >
              4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Target
              variables
              <span className={styles.subtitle}>Subtitle for Section 4</span>
            </li>
          </ul>
        </nav>
        <main className={styles.content}>
          <div className={`${styles.header} flex flex-col items-center justify-center`}>
            <Image src="/images/20945567s.png" width={800} height={800} alt="logo" />
            <div className='text-center '>
              <div className='text-3xl font-semibold'>Use cases</div>
              <p className='text-3xl flex justify-center gap-3'>   </p>
            </div>
          </div>
          <section className={styles.section} id="section1">
            <p className=" text-3xl">Lorem ipsum dolor sit amet...</p>
          </section>
          <section className={styles.section} id="section2">
            <p className=" text-3xl">Lorem ipsum dolor sit amet...</p>
          </section>
          <section className={styles.section} id="section3">
            <p className=" text-3xl">Lorem ipsum dolor sit amet...</p>
          </section>
          <section className={styles.section} id="section4">
            <p className=" text-3xl">Lorem ipsum dolor sit amet...</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UseCases;
