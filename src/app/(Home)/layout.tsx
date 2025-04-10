import { Toaster } from "react-hot-toast";
import "../globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Plateful.AI | Snap, Search, Savor.</title>
        <meta
          name="description"
          content="Plateful.AI is your AI-powered culinary assistant that transforms food images or text into complete recipes with ingredients, instructions, and cooking videos. Whether you're exploring international cuisines or rediscovering traditional favorites, Plateful.AI brings intelligent dish recognition, multilingual recipe translation, and top YouTube links right at your fingertips. Just snap a photo or enter a dish name — and let Plateful.AI help you cook like a pro."
        />
      </head>
      <body className="antialiased">
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
