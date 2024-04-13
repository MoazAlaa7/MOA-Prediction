import React from 'react';
import styles from './sectionOne.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';

function SectionOne() {
  return (
    
<>
    <div className={styles.container}>


      <article className={styles.article}>

        
        <h2 className={styles.title}>Categorical Features Analysis</h2>
        {/* <p className={styles.subtitle}>
          Type of Treatment
        </p> */}

        {/* <p className={styles.date}>2020-12-27</p> */}

        <section className={styles.content}>
          <h3>Type of Treatment</h3>
          <Image src='/images/photo_2024-02-25_15-56-50.jpg' width={1000} height={1000} className='py-10'/>
              <p>
          In both the train and the test dataset, we find a similar rate of imbalance in terms of the way treatment was provided:
          whether samples were treated with compounds or with control perturbation.
        </p>

        <p>
          Samples treated with compounds are around 92.2% and 91.0% while control perturbation treatments are 7.8% and 9.0% 
          of samples in the train and test dataset respectively.
        </p>

        <h3>Time Duration of Treatment</h3>
        <p>
          The datasets contain samples treated and observed at different time intervals-24, 48, 72 hours.
        </p>
         <Image src='/images/photo_2024-02-25_16-17-15.jpg' width={1000} height={1000} className='py-10'/>
        
        <p>
          In both the train and the test dataset, there are more number of samples observed after 48 hours compared to samples 
          observed after 24 and 72 hours, around 34.64% and 34.58% in the train and test dataset respectively.
        </p>

        <h3>Doses of Drugs</h3>
        <p>
          The datasets contain samples treated with two different dosages of drugs D1 and D2.
        </p>
         <Image src='/images/photo_2024-02-25_16-19-00.jpg' width={1000} height={1000} className='py-10'/>
        <p>
          There are more number of samples treated with dosage D1 than dosage D2, around 51.01% and 50.90% in the train and the 
          test dataset respectively. Hence, this is a balanced feature.
        </p>          {/* Other content */}
        </section>
      </article>
    </div>
</>
  );
}

export default SectionOne;
