import { Syne, Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const bai = Bai_Jamjuree({
  variable: "--font-bai",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Javis",
  description: "Game Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${bai.variable}`}>
        {children}
      </body>
    </html>
  );
}
