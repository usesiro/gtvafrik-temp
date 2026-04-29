import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configure your custom font
const gudlak = localFont({
  src: [
    {
      path: "../../public/fonts/GCGudlakDemo-Regular.ttf", // Make sure this matches your file name exactly
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GCGudlakDemo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gudlak",
});

export const metadata: Metadata = {
  title: "GTV AFRIK | Media",
  description: "Accelerating African Narrative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gudlak.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}