"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

// border-4 border-white
export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640); // Adjust this threshold as needed
    }

    handleResize(); // Call it initially to set the state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);
  return (
    <div
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-start"
    >
      {!isMobile && (
        <div className=" mr-[5vh] h-[40vh] w-full sm:mb-[-7vh] sm:h-[60vw] sm:w-[60vw]">
          <Spline scene="https://prod.spline.design/d-mvfO2CGrqE6Oxw/scene.splinecode" />
        </div>
      )}

      <div className="mx-48 mb-10 mt-52 flex w-[90vw] flex-col items-center px-12 text-center text-sm font-thin !leading-[1.5] sm:mt-20 sm:w-[90vw] sm:text-right sm:text-base md:w-[80vw] md:text-xl ">
        <div className=" mb-10 flex flex-col items-center justify-center sm:flex-row md:mt-12 ">
          <div className=" relative h-[15vh] w-[15vh] sm:mr-5 sm:mt-5 sm:h-[100%] sm:w-[30%]">
            <Image
              src="/potrait.jpeg"
              alt="Shahoriar Ratul"
              width="280"
              height="280"
              quality="95"
              priority={true}
              className=" absolute left-0 top-0 z-20 h-[15vh] w-[15vh] rounded-full border-[0.20rem] border-white object-cover shadow-xl transition-all duration-200  ease-in-out sm:h-24 sm:w-24"
            />
            <div className="absolute -inset-4 left-0 top-0 z-10 animate-spin rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 blur-md "></div>
          </div>
          <h1 className="mt-8 w-[100%] text-center sm:text-left">
            <span className="font-bold"> Hello, I&apos;m Ratul.</span> I&apos;m
            a <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">hands on </span> of experience on
            multiple pojects. I enjoy building{" "}
            <span className="italic">sites & apps </span>
            that feels alive . My focus is{" "}
            <span className="underline">React</span> <span> on </span>{" "}
            <span className="underline"> Next.js</span>.
          </h1>
        </div>

        <div className="flex h-12 flex-col gap-5 sm:text-sm">
          <Link
            href="#footer"
            className=" group flex cursor-pointer items-center gap-2 rounded-full border border-violet-800 bg-opacity-45 px-7 py-3 text-center text-xs text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-violet-800/50 focus:scale-105 active:scale-105 sm:text-xs"
          >
            Contact me here
            <span>
              <BsArrowRight className="inline-block opacity-70 transition" />
            </span>
          </Link>
          <a
            className=" group flex cursor-pointer items-center gap-2 rounded-full border border-violet-800 bg-opacity-45 px-7 py-3 text-xs outline-none transition duration-300 hover:scale-105 hover:bg-violet-800/50 focus:scale-105 active:scale-105 dark:bg-white/10 sm:text-xs"
            href="/Shahoriar_Ratul_CV.pdf"
            download
          >
            Download CV <HiDownload className="opacity-60 transition" />
          </a>
          <div className="mt-16  flex flex-row items-center justify-center gap-5">
            <a
              className=" flex cursor-pointer items-center gap-2  rounded-full p-2 text-white transition hover:scale-[1.15] hover:text-violet-200/50 focus:scale-[1.15] active:scale-105
               dark:bg-white/10 dark:text-white/60
              "
              href="https://www.linkedin.com/in/shahoriar-ratul"
              target="_blank"
            >
              <FaLinkedin className=" h-12 w-12" />
            </a>
            <a
              className="  flex cursor-pointer items-center gap-2 rounded-full  p-2 text-white transition hover:scale-[1.15] hover:text-violet-200/50  focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
              href="https://github.com/Shahoriarratul"
              target="_blank"
            >
              <FaGithubSquare className=" h-12 w-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
