"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import dynamic from "next/dynamic";
import { SlArrowDown } from "react-icons/sl";

const Hero3d = dynamic(() => import("@/components/Hero3d"), { ssr: false });

// border-4 border-white
export default function Hero({ isMobile }: { isMobile?: boolean }) {
  return (
    <div
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-start"
    >
      {!isMobile && <Hero3d />}

      <div className="mx-48 mb-10 mt-32 flex w-[90vw] flex-col items-center px-12 text-center text-sm font-thin !leading-[1.5] sm:mt-0 sm:w-[90vw]  sm:text-right sm:text-base md:w-[80vw] md:text-xl  lg:text-2xl xl:text-3xl 2xl:w-[70vw] ">
        <div className=" mb-10 flex flex-col items-center justify-center sm:flex-row  md:mt-12">
          <div className=" relative flex h-[15vh] w-[15vh]  items-center justify-center sm:mr-5 sm:mt-5 sm:h-[100%] sm:w-[30%] 2xl:mr-0">
            <Image
              src="/potrait.jpeg"
              alt="Shahoriar Ratul"
              width="280"
              height="280"
              quality="95"
              priority={true}
              className=" absolute z-20 h-[15vh] w-[15vh] rounded-full border-[0.20rem] border-white object-cover shadow-xl transition-all duration-200 ease-in-out sm:h-24 sm:w-24 lg:h-[15vh] lg:w-[15vh] "
            />
            <div className=" absolute -inset-4 z-10 animate-spin rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 blur-md sm:static sm:h-24 sm:w-24 lg:h-[15vh] lg:w-[15vh]"></div>
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

        <div className="flex h-12 flex-col gap-5 sm:text-sm lg:flex-row lg:text-base 2xl:mt-2">
          <Link
            href="#footer"
            className=" group flex cursor-pointer items-center gap-2 rounded-full border border-violet-800 bg-opacity-45 px-7 py-3 text-center text-xs text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-violet-800/50 focus:scale-105 active:scale-105 sm:text-xs lg:text-base 2xl:text-xl"
          >
            Contact me here
            <span>
              <BsArrowRight className="inline-block opacity-70 transition" />
            </span>
          </Link>
          <a
            className=" group flex cursor-pointer items-center gap-2 rounded-full border border-violet-800 bg-opacity-45 px-7 py-3 text-xs outline-none transition duration-300 hover:scale-105 hover:bg-violet-800/50 focus:scale-105 active:scale-105 dark:bg-white/10 sm:text-xs lg:text-base 2xl:text-xl"
            href="/Shahoriar_Ratul_CV.pdf"
            download
          >
            Download CV <HiDownload className="opacity-60 transition" />
          </a>
          <div className="mt-6 flex  flex-row items-center justify-center gap-5 md:mt-0 ">
            <a
              className=" flex cursor-pointer items-center gap-2  rounded-full p-2 text-white transition hover:scale-[1.15] hover:text-violet-200/50 focus:scale-[1.15] active:scale-105
               dark:bg-white/10 dark:text-white/60
              "
              href="https://www.linkedin.com/in/shahoriar-ratul"
              target="_blank"
            >
              <FaLinkedin className=" h-10 w-10" />
            </a>
            <a
              className="  flex cursor-pointer items-center gap-2 rounded-full  p-2 text-white transition hover:scale-[1.15] hover:text-violet-200/50  focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
              href="https://github.com/Shahoriarratul"
              target="_blank"
            >
              <FaGithubSquare className=" h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
      <Link
        href="#about"
        className=" absolute bottom-10 hidden h-12 w-12 animate-bounce items-center justify-center rounded-full bg-violet-600/20 shadow-md shadow-blue-800/50 ring-1 ring-slate-300/70 sm:bottom-5 sm:flex "
      >
        <SlArrowDown className="text-white" />
      </Link>
    </div>
  );
}
