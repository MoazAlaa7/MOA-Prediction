import React from 'react';
import Image from "next/image";


function SectionTwo() {
  return (
    
<>
       
    <article className=" shadow-lg rounded-xl p-8 mb-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Introduction</h1>
        {/* <div className="text-gray-600 text-lg">
          <span className="mr-2">John Doe</span>
        </div> */}
      </header>
      <div className="text-gray-800 leading-relaxed text-lg">

        <p> • Antibiotics: Target specific components of bacterial cells, such as cell wall synthesis or protein synthesis, leading to bacterial cell death or inhibition of growth.</p>
        <p>• Antivirals: Interfere with viral replication by inhibiting viral enzymes or preventing viral attachment and entry into host cells.</p>
        <p> •Antifungals: Disrupt fungal cell membranes or interfere with fungal cell wall synthesis, leading to fungal cell death.</p>
      </div>
      <br></br>
      <br />
      <br />
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">MOAs</h1>
        {/* <div className="text-gray-600 text-lg">
          <span className="mr-2">John Doe</span>
        </div> */}
      </header>
      <div className="flex gap-4">
      <div className="rounded-lg border p-6  max-w-sm">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-950">
          <p className="text-sm font-semibold leading-none ">
              Bacterial infections (pneumonia, urinary tract infections), viral infections (influenza, HIV), fungal infections (candidiasis, aspergillosis)..
          </p>
        </div>
      </div>
      <div className="rounded-lg border p-6 max-w-sm">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-950">
          <p className="text-sm font-semibold leading-none">Examples: Penicillin, amoxicillin, azithromycin, oseltamivir, fluconazole.</p>
        </div>
      </div>
    </div>
    <br />
      <div className="text-gray-800 leading-relaxed text-lg">
        
        <p> 
          <br></br>
            1.&nbsp;&nbsp;bacterial_30s_ribosomal_subunit_inhibitor<br></br>
            2.&nbsp;&nbsp;bacterial_50s_ribosomal_subunit_inhibitor<br></br>
            3.&nbsp;&nbsp;bacterial_antifolate<br></br>
            4.&nbsp;&nbsp;bacterial_cell_wall_synthesis_inhibitor<br></br>
            5.&nbsp;&nbsp;bacterial_dna_gyrase_inhibitor<br></br>
            6.&nbsp;&nbsp;bacterial_dna_inhibitor<br></br>
            7.&nbsp;&nbsp;bacterial_membrane_integrity_inhibitor<br></br>
            8.&nbsp;&nbsp;hiv_inhibitor<br></br>
          </p>
      </div>
      <br />
      <br />
      <br />

      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Drugs</h1>
        {/* <div className="text-gray-600 text-lg">
          <span className="mr-2">John Doe</span>
        </div> */}
      </header>
    <br />
      <div className="grid md:grid-cols-2 gap-4 bg-gray-100 text-lg ">
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full ">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody className=''>
            <tr className="border-b ">
              <td className="px-4 py-3">1. Penicillin
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">2. Amoxicillin
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">3. Ciprofloxacin

</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">4. Azithromycin
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">5. Doxycycline
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">6. Vancomycin

</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">7. Erythromycin

</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">8. Metronidazole
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">9. Fluconazole
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">10. Ketoconazole
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">11. Acyclovir
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">12. Oseltamivir
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">13. Itraconazole
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">14. Voriconazole
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">15. Amphotericin B
</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">16. Levofloxacin</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">17. Gentamicin</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">18. Amikacin</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">19. Tetracycline</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">20. Trimethoprim</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">21. Linezolid</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">22. Efavirenz</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">23. Darunavir
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">24. Oseltamivir</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">25. Valganciclovir
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">26. Nystatin
</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">27. Griseofulvin</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">28. Terbinafine</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">29. Flucytosine</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">30. Clarithromycin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      <br />
      <br />
      <br />
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Antibiotic/Antiviral/Antifungal diseases</h1>
        {/* <div className="text-gray-600 text-lg">
          <span className="mr-2">John Doe</span>
        </div> */}
      </header>
    <br />
      <div className="text-gray-800 leading-relaxed text-lg">
        
              <div className="text-gray-800 leading-relaxed text-lg">
        
        <p> •Streptococcal infections: Including strep throat (caused by Streptococcus pyogenes) and various skin infections (e.g., impetigo) caused by Streptococcus bacteria.</p>
        <p>•Staphylococcal infections: Such as skin infections (e.g., cellulitis, abscesses) and more severe infections like sepsis, often caused by Staphylococcus aureus.
</p>
        <p>•Urinary tract infections (UTIs): Common bacterial infections affecting the urinary system, often caused by Escherichia coli but can also be caused by other bacteria such as Klebsiella or Enterococcus species.
</p>
        <p>•Pneumonia: An infection of the lungs caused by bacteria like Streptococcus pneumoniae, Haemophilus influenzae, or Mycoplasma pneumoniae, among others.
</p>
       </div>
       <br />
       
       <div className="grid md:grid-cols-2 md:gap-6">
      <div className="border bg-gray-100 dark:bg-gray-950 p-4 rounded-lg space-y-4 mr-2">
        <h3 className="text-lg font-bold">Most Dangerous</h3>
        <p className="text-sm text-black leading-normal">
          • Sepsis: While not a specific disease itself, sepsis is a life-threatening condition that can occur as a complication of various infections, including bacterial infections treated with antibiotics. Sepsis occurs when the body's response to infection triggers widespread inflammation, leading to organ dysfunction and failure, and it has a high mortality rate if not promptly treated.

        </p>
      </div>
      <div className="border  rounded-lg  bg-gray-100 dark:bg-gray-950 p-4 space-y-4 ">
        <h3 className="text-lg font-bold">Most Widespread</h3>
        <p className="text-sm text-black leading-normal">
          • Urinary tract infections (UTIs): UTIs are among the most common bacterial infections worldwide, affecting millions of people each year. They can occur in individuals of all ages and genders and are typically caused by bacteria such as Escherichia coli.
        </p>
      </div>
    </div>
       </div>
       <br />
      <br />
            <h2  className="text-lg font-semibold leading-none">
              Examples of where finding effective treatments or cures presents significant challenges:
            </h2>
 
        <br />
        <div className="text-gray-800 leading-relaxed text-lg">
         <p>•Multidrug-resistant tuberculosis (MDR-TB): Tuberculosis (TB) is caused by the bacterium Mycobacterium tuberculosis and remains a significant global health threat. MDR-TB occurs when the TB bacteria develop resistance to two or more first-line antibiotics, making treatment significantly more challenging and expensive. The treatment of MDR-TB requires prolonged courses of second-line antibiotics that are often less effective, more toxic, and more costly than standard TB drugs. Additionally, treatment adherence is critical to prevent further drug resistance, but it can be challenging due to the long duration of therapy and potential side effects.</p>
        </div>

    </article>
</>
  );
}

export default SectionTwo;
