import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frontend Mentor | Advice generator app",
  description: "Built with React, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
