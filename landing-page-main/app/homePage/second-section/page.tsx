"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from './second-section.module.css'
const features = [
  {
    name: "MoA Prediction Tool",
    description:
      "Unlock the future of drug discovery with our cutting-edge MoA prediction tool! Empower your research by accurately predicting a compound's Mechanism of Action from its cellular signature. Revolutionize the way you approach drug development and gain unprecedented insights into molecular pathways.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: " Insights and Analysis ",
    description:
      "Dive into a world of data-driven discoveries! Our platform not only predicts MoA but also provides in-depth insights and analysis. Uncover hidden patterns, identify novel connections, and stay at the forefront of scientific exploration. Elevate your research with our comprehensive analytical tools.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },
  {
    name: "Researches and Case Studies",
    description:
      "Explore the frontier of biotechnology with our curated collection of researches and case studies. Stay informed about the latest breakthroughs, success stories, and advancements in MoA. Gain a competitive edge by leveraging the knowledge and experiences shared by experts in the field. Your journey to innovation starts here.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
  {
    name: " More..",
    description:
      "Stay tuned for more updates, and services that will redefine your journey with us. Your exploration has only just begun.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
  {
    name: "Feature 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: "/images/icon-location.png",
    alt: "Customizable",
  },
  {
    name: "Feature 6",
    image: "/images/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
  },
];

const SecondSection = () => {
  return (
    <div className={styles.background}  >
      <div
        className="
        md:flex-row
        flex-col
        items-center
        flex  justify-center pb-10
        "
      >
        <div className="p-5 justify-center md:w-1/3">
          <div className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10">
            MoA (Mechanism of Action):
          </div>
          <div className="text-2xl mb-8">
            In pharmacology, the term Mechanism of Action (MoA) embodies the
            intricate biochemical interactions underlying a drug's
            pharmacological effects. These interactions are pivotal, often
            targeting specific molecular entities such as enzymes or receptors,
            and are fundamental to understanding a drug's therapeutic properties
            and potential side effects.
          </div>
          <Link href="../../Prediction">
            <button className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </Link>
        </div>
        

        <div className="md:ml-10 md:mt-0 mt-5">
          <Image
            className="rounded-xl"
            src="/images/third.jpg"
            width={600}
            height={600}
            alt="logo"
          />
        </div>
      </div>
                              <div className=" container text-center rounded-xl w-5/6 bg-blue-50 w-60vw mx-auto  h-[40vh] my-20 p-6 flex justify-center py-10">
                            {/* First Column for video tab container */}
                            <div className="w-1/2">
                                {/* Add your video tab container here */}
                                <video className="rounded-xl  " width={570} height={240} autoPlay muted loop>
                                    <source src="/content/hero-1.mp4" type="video/mp4" />

                                </video>
                            </div>
                            {/* Second Column for "How to Use" title */}
                            <div className="w-1/2 mt-20 text-left">
                                {/* Add any content related to "How to Use" here */}
                                <h2 className="text-black text-2xl font-bold ">Watch this ,</h2>
                                <h2 className="text-black text-2xl font-bold mb-10">How to Use Our Tool</h2>
                                <p className="text-black text-lg ">In this section, we'll guide you through the steps to
                                </p>
                                <p className="text-black text-lg mb-4">  effectively utilize our tool . We'll walk you through it step by step, and provide you with all the necessary information to get started. 
                                </p>
                                
                            </div>
                        </div>

      <div className="flex-col items-center justify-center">
        <div
          className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-purple-400
                to-blue-800
                bg-clip-text
                text-transparent
                "
        >
          Product Features
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
            >
              <div
                className="
                            text-gray-600 text-3xl font-bold
                            "
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div>
                  <div
                    className="text-2xl pb-4 bg-gradient-to-t
                                    from-black
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent
                                    "
                  >
                    {feature.name}
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
