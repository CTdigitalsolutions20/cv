import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Alberto Ledesma Ollega - Senior Full Stack Lead & Frontend Architect",
  description: "CV & Portfolio interactivo de Alberto Ledesma Ollega (+12 años de experiencia). Full Stack Lead, React, Next.js, Vue.js, Angular, Node.js, Cloud & IA.",
  keywords: ["Alberto Ledesma Ollega", "Full Stack Developer", "Frontend Architect", "React", "Next.js", "Vue.js", "Angular", "Node.js", "Freelance", "Sevilla"],
  authors: [{ name: "Alberto Ledesma Ollega" }],
  openGraph: {
    title: "Alberto Ledesma Ollega - Senior Full Stack Lead",
    description: "+12 años de experiencia en desarrollo web Full Stack y liderazgo técnico.",
    siteName: "Alberto Ledesma CV",
    images: [
      {
        url: "/foto.jpg",
        width: 800,
        height: 800,
        alt: "Alberto Ledesma Ollega"
      }
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
