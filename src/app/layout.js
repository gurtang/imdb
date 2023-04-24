import "./globals.css";
import Header from "@/components/header";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/*Header*/}
          <Header />

          {/*Navbar*/}
          <Navbar />
          {/*SearchBox*/}
          {children}
        </Providers>
      </body>
    </html>
  );
}
