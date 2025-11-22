import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-latin"
});

export const metadata: Metadata = {
  title: "المعالجة الذكية للبشرة | تجربة فاخرة داخل المنزل",
  description:
    "احصلي على بشرة ناعمة ومتألقة مع جهاز العناية الفاخرة. متوفر الآن بسعر 3500 دج مع توصيل مجاني لكل ولايات الجزائر."
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl" className={`${arabicSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
