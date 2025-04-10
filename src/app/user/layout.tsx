"use client";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import SideNav from "./SideNav";
import { AuthProvider, useAuth } from "@/context/AuthProvider";
import Script from "next/script";

const Component = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { setUser } = useAuth();
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
    const fetchUser = async () => {
      const response = await axios.get("/api/auth/verifytoken");
      if (response.data) {
        setUser(response.data.user);
      }
    };
    fetchUser();
  }, []);
  return (
    <html lang="en">
      <head>
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
        />
        <title>Plateful.AI | Snap, Search, Savor.</title>
        <meta
          name="description"
          content="Plateful.AI is your AI-powered culinary assistant that transforms food images or text into complete recipes with ingredients, instructions, and cooking videos. Whether you're exploring international cuisines or rediscovering traditional favorites, Plateful.AI brings intelligent dish recognition, multilingual recipe translation, and top YouTube links right at your fingertips. Just snap a photo or enter a dish name — and let Plateful.AI help you cook like a pro."
        />
      </head>
      <body className={`antialiased`}>
        <div
          id="google_translate_element"
          className="fixed right-44 top-1.5 z-50 py-2 rounded-lg bg-base-300 text-base-content h-14 overflow-hidden"
        ></div>
        <Toaster />
        <SideNav>{children}</SideNav>
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <Component>{children}</Component>
    </AuthProvider>
  );
}
