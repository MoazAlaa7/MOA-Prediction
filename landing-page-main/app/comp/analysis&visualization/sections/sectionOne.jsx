import React from 'react';
import styles from './sectionOne.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../../../components/ui/hero-highlight";

function SectionOne() {
  return (
    
<>
       <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
          Analysis and Visualization
        </Highlight>
<div className="text-lg pt-10">
Highlighting key findings and insights through comprehensive analysis.</div>
      </motion.h1>
    </HeroHighlight>
    <article className=" shadow-lg rounded-xl p-8 mb-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Sample Article Title</h1>
          <Image             src='/images/amir-zand-artstation-details.jpg'width={1000} height={1000} className='py-10'/>
        <div className="text-gray-600 text-lg">
          <span className="mr-2">John Doe</span>
          <span>April 18, 2024</span>
        </div>
      </header>
      <div className="text-gray-800 leading-relaxed text-lg">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <footer className="mt-6 text-gray-600 text-lg">
        <p className="mb-4">Tags: <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg mr-2">React</span><span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg mr-2">JavaScript</span><span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">Web Development</span></p>
        <p className="italic">Estimated reading time: 3 minutes</p>
      </footer>
    </article>
</>
  );
}

export default SectionOne;
