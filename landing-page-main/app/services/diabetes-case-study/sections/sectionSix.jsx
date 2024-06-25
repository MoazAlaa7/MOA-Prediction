"use client"
import React from 'react';
import styles from './sectionOne.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../../../components/ui/hero-highlight";
import Link from 'next/link';

function SectionOne() {
  return (
    
<>

    <div className={styles.container}>
         
{/* {" "}
          <Link href="#" prefetch={false}>
            utility-first
          </Link>{" "} */}

      <article className={styles.article}>

        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <h2 className="text-2xl mb-4 font-bold tracking-tight lg:text-3xl"> Endocrine Agents diseases: (Diabetes) 
</h2>
        <p className='text-xl mt-4'>
• Diabetes mellitus is the most Dangerous/ widespread Disease Specially T2D:

        </p>
        <p className='text-xl mt-4'>
Here are the MoAs of Diabetes 

        </p>
        <p className='text-xl mt-4'>
		-  insulin_secretagogue

        </p>
        <p className='text-xl mt-4'>
-  insulin_sensitizer

        </p>
        <p className='text-xl mt-4'>
For more info about the medications and drugs used for T2D:

        </p>
        <p className='text-xl mt-4'>
 Here are some articles and references :

        </p>

        <h2 className="text-2xl mb-4 mt-4 font-semibold tracking-tight lg:text-3xl">New and emerging drugs and targets for type 2 diabetes: reviewing the evidence
</h2>
        <p className='text-xl mt-4'>
• Authors: BR Miller, H Nguyen, CJH Hu, C Lin

        </p>
        <p className='text-xl mt-4'>
• Summary: This review discusses various options for the treatment of type 2 diabetes mellitus, highlighting several emerging drugs and their efficacy.

        </p>
        <p className='text-xl mt-4'>
• Read the full article
        </p>
        <h2 className="text-2xl mb-4 mt-4 font-semibold tracking-tight lg:text-3xl">Novel diabetes drugs and the cardiovascular specialist

</h2>
        <p className='text-xl mt-4'>
• Authors: N Sattar, MC Petrie, B Zinman, JL Januzzi


        </p>
        <p className='text-xl mt-4'>
• Summary: This paper reviews new diabetes drugs, particularly focusing on their impact on cardiovascular health.

        </p>
        <p className='text-xl mt-4'>
• Read the full article
        </p>
        <h2 className="text-2xl mb-4 mt-4 font-semibold tracking-tight lg:text-3xl">Future glucose-lowering drugs for type 2 diabetes

</h2>
        <p className='text-xl mt-4'>
• Authors: CJ Bailey, AA Tahrani, AH Barnett


        </p>
        <p className='text-xl mt-4'>
• Summary: This paper reviews future developments in glucose-lowering drugs and their potential impact.

        </p>
        <p className='text-xl mt-4'>
• Read the full article
        </p>

        <img
          src="/images/hsa04930_20240625_093200.png"
          alt="Serene Landscape"
          width={800}
          height={600}
          className="aspect-[4/3] object-cover rounded-lg"
        />
        <h3 className='mb-10'>Fig.3 T2D metabolic pathway 
 
</h3>
        <img
          src="/images/hsa04931_20240625_093149.png"
          alt="Serene Landscape"
          width={800}
          height={600}
          className="aspect-[4/3] object-cover rounded-lg"
        />
        <h3>Fig.4 Insulin Resistance  

 
</h3>

      </article>
    </div>


      </article>
    </div>
</>
  );
}

export default SectionOne;