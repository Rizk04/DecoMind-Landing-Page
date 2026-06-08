import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import WrapperNav from "@/components/Home/Navbar/WrapperNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Montserrat({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DecoMind",
  description: "DecoMind landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <WrapperNav />
        {children}

        <Footer />
      </body>
    </html>
  );
}
