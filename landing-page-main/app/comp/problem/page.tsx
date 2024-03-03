// import React from 'react';
// import styles from './page.module.css'; // Import your CSS module
// import Image from "next/image";

// function Problem() {
//   return (

// <>
//     <div className={styles.container}>
//       <Image src="/images/national-cancer-institute-1PpyUZceg_I-unsplash.jpg" width={1000} height={1000} alt="logo" className='rounded-xl mt-10 border shadow-lg'/>

//       <article className={styles.article}>
//         <h1 className={styles.title}>Getting Started with AWS</h1>
//         <p className={styles.subtitle}>
//           Create an AWS account and set up CLI/SDK access.
//         </p>
//         <p className={styles.date}>2020-12-27</p>

//         <section className={styles.content}>
//           <p>
//             "Cloud computing" plays a vital role in the creation of software products and services. It's also one of the most highly sought-after skills in the tech industry.
//           </p>
//           <p>
//             In fact, most of the projects on this site will require cloud interaction of some sort—particularly with AWS's serverless products.
//           </p>

//           <h2>Getting Started</h2>

//           <blockquote>
//             To use AWS in these projects, we'll need to set up an account, the CLI, and the SDK.
//           </blockquote>

//           <h3>Create an account</h3>
//           <p>If you don't already have an account then <a href="https://portal.aws.amazon.com/billing/signup#/start">sign up here</a>.</p>
//           <p>Once you are signed up, you should be able to log in to the <a href="https://aws.amazon.com/console/">AWS Console</a>. It might look overwhelming if you're seeing it for the first time.</p>

//           {/* Other sections go here */}

//           <h2>Why AWS?</h2>
//           <p>
//             When we bring "the cloud" into a project, it's usually because there's some capability we'd like to add.
//           </p>
//           {/* Other content */}
//         </section>
//       </article>
//     </div>
// </>
//   );
// }

// export default Problem;

import React from "react";
import styles from "./page.module.css"; // Import your CSS module
import Image from "next/image";

function Problem() {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/images/kaggle.png"
          width={1000}
          height={1000}
          alt="logo"
          className="rounded-xl mt-10 border shadow-lg"
        />

        <article className={styles.article}>
          <h1 className={styles.title}>About Kaggle</h1>
          <p className={styles.subtitle}>
            Kaggle is a platform for predictive modeling and analytics
            competitions. It allows data scientists, machine learning engineers,
            researchers, and enthusiasts to participate in and contribute to
            data science projects. It's known for hosting data science
            competitions, where participants use their skills to tackle
            real-world problems by building models with the best solutions, and
            provides access to a wealth of public datasets that can be used for
            training and experimentation.
          </p>

          <section className={styles.content}>
            <h2>Problem Description</h2>
            <p>
              In this competition, we had access to a unique dataset that
              combines gene expression and cell viability data. The data is
              based on a new technology that measures simultaneously (within the
              same samples) human cells’ responses to drugs in a pool of 100
              different cell types (thus solving the problem of identifying
              ex-ante, which cell types are better suited for a given drug). In
              addition, you will have access to MoA annotations for more than
              5,000 drugs in this dataset.
            </p>

            <h2>Kaggle Competition Link</h2>
            <p>
              For detailed information about the competition, visit the Kaggle
              page:
              <a
                href="https://www.kaggle.com/c/lish-moa/overview"
                target="_blank"
              >
                Kaggle - MOA Prediction Challenge
              </a>
            </p>

            {/* Add more sections as needed, such as data description, evaluation criteria, etc. */}

            <h2>Why This Challenge Matters</h2>
            <p>
              This challenge is presented with the goal of advancing drug
              development through improvements to MoA prediction algorithms. If
              successful, it will help to develop an algorithm to predict a
              compound’s MoA given its cellular signature, thus helping
              scientists advance the drug discovery process.
            </p>
            {/* Other content */}
          </section>
        </article>
      </div>
    </>
  );
}

export default Problem;
