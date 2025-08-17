import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntuSansMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DottedBackground • by d4nilpzz",
  description: "This component demonstrates a customizable dotted background using SVG patterns. You can adjust the dot color, size, and spacing through props.",
  openGraph: {
    title: "DottedBackground • by d4nilpzz",
    description:
      "This component demonstrates a customizable dotted background using SVG patterns. You can adjust the dot color, size, and spacing through props.",
  },
  keywords: ['React', 'Typescript', 'Component'],
  authors: [{ name: 'José Daniel', url: 'https://github.com/d4nilpzz' }],
  creator: "d4nilpzz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://dotted.d4nilpzz.dev" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntuSansMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
