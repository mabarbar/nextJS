import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ProfilePicture from "./components/ProfilePicture";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matik's blog",
  description: "Created by Mateusz Barzenc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-800`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
