import MarginWidthWrapper from '@/components/margin-width-wrapper';
import ModelHeader from '@/components/modelPageHeader';
import HeaderMobile from '@/components/modelPageHeaderMobile';
import PageWrapper from '@/components/page-wrapper';
import SideNav from '@/components/side-nav'; // Update the path based on your project structure
import { Outfit } from 'next/font/google';
import React from 'react';
const font = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </>
    </>
  );
}
