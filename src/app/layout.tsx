import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Risky Akbar Hidayat — QA Engineer & Data Science Student",
  description:
    "Portfolio of M. Risky Akbar Hidayat — Quality Assurance Engineer, Data Science Student, and Co-Founder. Specializing in manual testing, functional testing, SIT, UAT, and AI model evaluation.",
  keywords: [
    "QA Engineer",
    "Quality Assurance",
    "Data Science",
    "Portfolio",
    "M Risky Akbar Hidayat",
  ],
  openGraph: {
    title: "M. Risky Akbar Hidayat — QA Engineer & Data Science Student",
    description:
      "Portfolio of M. Risky Akbar Hidayat — Quality Assurance Engineer, Data Science Student, and Co-Founder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
