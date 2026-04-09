import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://duongchingoan.site'),
  title: "Dương Chí Ngoan | Sáng tạo nội dung AI & Chuyên gia truyền thông",
  description: "Portfolio chính thức của Dương Chí Ngoan - Chuyên gia công cụ AI, sáng tạo nội dung và chiến lược truyền thông mạng xã hội. Khám phá các dự án và thành tựu đột phá.",
  openGraph: {
    title: "Dương Chí Ngoan | Sáng tạo nội dung AI & Chuyên gia truyền thông",
    description: "Khám phá Portfolio chuyên nghiệp của Dương Chí Ngoan.",
    url: 'https://duongchingoan.site',
    siteName: 'Dương Chí Ngoan Portfolio',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}
