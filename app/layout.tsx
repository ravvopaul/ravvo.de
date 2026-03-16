import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-syne",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "ravvo.",
  description: "Clip-Distribution für den DACH-Raum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${syne.variable} ${plusJakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
