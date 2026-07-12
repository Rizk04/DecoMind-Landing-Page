import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import WrapperNav from "@/components/Navbar/WrapperNav";
import Footer from "@/components/Footer/Footer";
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/LoadingScreen";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        font.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="h-screen md:overflow-hidden flex flex-col">
        <LoadingScreen />
        <WrapperNav />
        {children}
      </body>
    </html>
  );
}
