"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

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
          <div className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-10">
            MoA (Mechanism of Action):
          </div>
          <div className=" text-xl mb-8">
            In pharmacology, the term Mechanism of Action (MoA) embodies the
            intricate biochemical interactions underlying a drug's
            pharmacological effects. These interactions are pivotal, often
            targeting specific molecular entities such as enzymes or receptors,
            and are fundamental to understanding a drug's therapeutic properties
            and potential side effects.
          </div>
          <Link href="../../Prediction">
            <Link href="../../Prediction" className="bg-blue-500 text-white p-4  mb-10 justify-center flex md:w-1/4 rounded-lg hover:bg-blue-600">
              Get Started
            </Link>
          </Link>
        </div>
        

        <div className="md:ml-10 md:mt-0 mt-5">
          <Image
            className="rounded-xl"
            src="/images/first.jpg"
            width={600}
            height={600}
            alt="logo"
          />
        </div>
        
      </div>

<div className="w-full py-12 pb-10 mb-16 bg-zinc-50 dark:bg-gray-950">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center space-y-4 md:space-y-6 md:flex-row md:items-start md:space-x-6 lg:space-x-12">
      
      {/* Video Section */}
      <div className="w-full md:w-1/3 md:mt-0 md:flex md:items-center"> {/* Take one-third of the width on medium screens and above */}
        <div className="rounded-lg border border-gray-200 border-gray-200 bg-gray-50 w-full aspect-video overflow-hidden dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
          <video className="w-full rounded-xl opacity-90" width={570} height={240} autoPlay muted loop>
            <source src="/content/hero-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      {/* Description Section */}
      <div className="w-full md:w-2/3"> {/* Take two-thirds of the width on medium screens and above */}
        <div className="dark:bg-gray-950 rounded-lg p-6 shadow-md">
          <div className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-10">
            Getting Started with Your Website
          </div>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Learn how to build and deploy your website in minutes using the Vercel platform.
          </p>
          <div className="grid gap-4 md:gap-8 mt-6">
            <div className="grid gap-2">
              <div className="font-medium">1. Sign in to Vercel</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                First, sign in to the Vercel platform at vercel.com using your GitHub account.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">2. Import your project</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Once you're signed in, click the "Import Project" button in the top right corner of the dashboard.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">3. Deploy your website</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                After configuring your settings, click the "Deploy" button to deploy your website.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
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

                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent  text-sm dark:text-slate-300">
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

export default dynamic (() => Promise.resolve(SecondSection), {ssr: false})
