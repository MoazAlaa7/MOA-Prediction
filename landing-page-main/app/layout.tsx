import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "./homePage/navbar/page";
import Providers from "./provider";
import Footer from "./homePage/footer/page";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MOA',
  description: 'mechanism of action of drugs prediction', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Providers>
          <Navbar  />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
