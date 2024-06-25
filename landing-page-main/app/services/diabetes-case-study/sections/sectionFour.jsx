import React from 'react';
import styles from './sectionFour.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';
import dynamic from "next/dynamic";


function SectionFour() {
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
        <h2 className="text-2xl mb-4 font-bold tracking-tight lg:text-3xl">What are the complications of diabetes?
</h2>
        <p className='text-xl mt-4'>
Diabetes can lead to acute (sudden and severe) and long-term complications — mainly due to extreme or prolonged high blood sugar levels.

        </p>
        <h2 className="text-2xl mb-4 font-semibold tracking-tight lg:text-3xl">Acute diabetes complications
</h2>

        <p className='text-xl mt-4'>
Acute diabetes complications that can be life-threatening include:

        </p>
        <p className='text-xl mt-4'>
• Hyperosmolar hyperglycemic state (HHS): This complication mainly affects people with Type 2 diabetes. It happens when your blood sugar levels are very high (over 600 milligrams per deciliter or mg/dL) for a long period, leading to severe dehydration and confusion. It requires immediate medical treatment.

        </p>
        <p className='text-xl mt-4'>
• Diabetes-related ketoacidosis (DKA): This complication mainly affects people with Type 1 diabetes or undiagnosed T1D. It happens when your body doesn’t have enough insulin. If your body doesn’t have insulin, it can’t use glucose for energy, so it breaks down fat instead. This process eventually releases substances called ketones, which turn your blood acidic. This causes labored breathing, vomiting and loss of consciousness. DKA requires immediate medical treatment.

        </p>
        <p className='text-xl mt-4'>
• Severe low blood sugar (hypoglycemia): Hypoglycemia happens when your blood sugar level drops below the range that’s healthy for you. Severe hypoglycemia is very low blood sugar. It mainly affects people with diabetes who use insulin. Signs include blurred or double vision, clumsiness, disorientation and seizures. It requires treatment with emergency glucagon and/or medical intervention.

        </p>
<h2 className="text-2xl mb-4 font-semibold tracking-tight lg:text-3xl">Long-term diabetes complications

</h2>
        <p className='text-xl mt-10'>
          Blood glucose levels that remain high for too long can damage your body’s tissues and organs. This is mainly due to damage to your blood vessels and nerves, which support your body’s tissues.

        </p>
        <p className='text-xl mt-4'>
Cardiovascular (heart and blood vessel) issues are the most common type of long-term diabetes complication. They include:

        </p>

        <p className='text-xl mt-4'>
• Coronary artery disease.

        </p>
        <p className='text-xl mt-4'>
• Heart attack.

        </p>
        <p className='text-xl mt-4'>
• Stroke.

        </p>
        <p className='text-xl mt-4'>
• Atherosclerosis.


        </p>
        <h2 className="text-2xl mb-4 font-semibold tracking-tight lg:text-3xl">Other diabetes complications include:
</h2>

 <p className='text-xl mt-4'>
• Nerve damage (neuropathy), which can cause numbness, tingling and/or pain.

        </p>
        <p className='text-xl mt-4'>
• Nephropathy, which can lead to kidney failure or the need for dialysis or transplant.

        </p>
        <p className='text-xl mt-4'>
• Retinopathy, which can lead to blindness.

        </p>
        <p className='text-xl mt-4'>
• Diabetes-related foot conditions.

        </p>
        <p className='text-xl mt-4'>
• Skin infections.


        </p>
        <p className='text-xl mt-4'>
• Amputations.

        </p>
        <p className='text-xl mt-4'>
• Sexual dysfunction due to nerve and blood vessel damage, such as erectile dysfunction or vaginal dryness.


        </p>
        <p className='text-xl mt-4'>
• Gastroparesis.

        </p>
        <p className='text-xl mt-4'>
• Hearing loss.
        </p>
        <p className='text-xl mt-4'>
• Oral health issues, such as gum (periodontal) disease.

        </p>
        <p className='text-xl mt-4'>
Living with diabetes can also affect your mental health. People with diabetes are two to three times more likely to have depression than people without diabetes.

        </p>




      </article>
    </div>


      </article>
    </div>
</>
  );
}

export default dynamic (() => Promise.resolve(SectionFour), {ssr: false})
