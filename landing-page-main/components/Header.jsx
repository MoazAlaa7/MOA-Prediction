import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div >
        <div className='text-3xl text-white'>Researches and references</div>
        <p className=' text-white text-lg mt-10'>👋 Explore a curated collection of tutorials, articles, research papers, and external links related to Mechanism of Action (MoA) prediction. . </p>
        
      </div>
    </header>
  )
}
export default Header ;