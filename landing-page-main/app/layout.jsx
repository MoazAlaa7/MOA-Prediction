import "./globals.css";
import Navbar from "./homePage/navbar/page";
import Providers from "./provider";
import Footer from "./homePage/footer/page";
export const metadata = {
    title: 'MOA',
    description: 'mechanism of action of drugs prediction',
};
export default function RootLayout({ children }) {
    return (<html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>);
}
