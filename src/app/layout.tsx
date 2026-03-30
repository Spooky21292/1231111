import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Atelier Verre — Премиальная студия красоты",
  description: "Премиальная студия красоты: прозрачные цены, сильные мастера, результат без компромиссов."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
