import type { Metadata } from "next";
import "./globals.css";
import { SpotifyPlayerProvider } from "@/context/SpotifyPlayerContext";

export const metadata: Metadata = {
  title: "Nesya Salma Ramadhani | QA Engineer & Fullstack Developer Portfolio",
  description: "Spotify-themed Interactive Portfolio of Nesya Salma Ramadhani - Quality Assurance Specialist, AI Researcher, and Software Developer.",
  keywords: ["Nesya Salma Ramadhani", "QA Engineer", "Katalon Studio", "UAT", "Software Testing", "Next.js Portfolio", "AI Developer", "ULBI Bandung"],
  authors: [{ name: "Nesya Salma Ramadhani" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className="bg-spotify-black text-white antialiased selection:bg-spotify-green selection:text-black">
        <SpotifyPlayerProvider>
          {children}
        </SpotifyPlayerProvider>
      </body>
    </html>
  );
}
