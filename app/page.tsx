"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Asap } from "next/font/google";

const asap = Asap({
  weight: "100",
  style: "normal",
  preload: false,
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return null;
  }

  return (
    <main
      className={`flex flex-col items-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white ${asap.className}`}
    >
      <Header />
      <Hero isMobile={isMobile} />
      <About />
      <Skills />
      <Projects isMobile={isMobile} />
      <Footer />
    </main>
  );
}
