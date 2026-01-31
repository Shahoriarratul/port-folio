"use client";

import dynamic from "next/dynamic";

const Skill3d = dynamic(() => import("@/components/Skill3d"), { ssr: false });
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "SQL",
  "PostgreSQL",
  "C#",
  ".net",
  "GSAP",
  "Framer Motion",
];

const iconLink = [
  "html.png",
  "css.png",
  "javaScript.png",
  "typeScript.png",
  "react.png",
  "Nextjs.png",
  "Nodejs.png",
  "Git.png",
  "Tailwind.png",
  "Prisma.png",
  "MongoDB.png",
  "Redux.png",
  "Express.png",
  "SQLDB.png",
  "PostgreSQL.png",
  "C.png",
  "net.png",
  "GSAP.png",
  "FramerMotion.png",
];
const combinedArray = skillsData.map((item, index) => [item, iconLink[index]]);
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      id="Skills"
      className="flex h-[140vh] w-full flex-col items-center justify-center sm:h-[80vh]"
    >
      {!isMobile && <Skill3d />}

      <div className=" z-10 mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text p-4 text-center text-6xl text-transparent ">
        SKILLS
      </div>
      <div className="my-10  w-[80vw] rounded-lg border-2 border-slate-600/40 bg-gradient-to-tr from-black/5 from-10% via-transparent via-50% to-black/5  to-80% backdrop-blur-[3px] md:w-[60vw] md:text-3xl">
        <div className=" m-5 flex flex-col items-center justify-center uppercase md:gap-2">
          <div className="w-full">
            <span className=" text-[#16f2b3]">Front End : </span>
            <span className=" text-violet-400">
              NEXT.js, TypeScript, React.Js, JavaScript, HTML & CSS
            </span>
          </div>
          <div className="m-2 h-[2px] w-[90%]  rounded-full bg-slate-600/45" />
          <div className="w-full">
            <span className=" text-[#16f2b3]">Styling : </span>
            <span className=" text-violet-400">
              TailWind, Styled-Component, CSS
            </span>
          </div>
          <div className="m-2 h-[2px] w-[90%]  rounded-full bg-slate-600/45 " />
          <div className="w-full">
            <span className=" text-[#16f2b3]">Back End : </span>
            <span className=" text-violet-400">
              NEXT.js, TypeScript, Node.js, Express.js , C#
            </span>
          </div>
          <div className="m-2 h-[2px] w-[90%]  rounded-full bg-slate-600 bg-slate-600/45" />
          <div className="w-full">
            <span className=" text-[#16f2b3]">Database : </span>
            <span className=" text-violet-400">
              PostgreSQL, MongoDB, Prisma, Drizzle
            </span>
          </div>
          <div className="m-2 h-[2px] w-[90%] rounded-full  bg-slate-600/45 " />
          <div className="w-full">
            <span className=" text-[#16f2b3]">Animation : </span>
            <span className=" text-violet-400">
              GSAP, Framer Motion , Motion.js
            </span>
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className="z-10 flex w-[80vw] flex-row flex-wrap justify-evenly">
          {combinedArray.map(([item, value], index) => (
            <div
              className="flex flex-row items-center justify-center gap-2 rounded-full border-2 border-violet-900/65 p-3"
              key={index}
            >
              <Image
                src={`/Tech logo/${value}`}
                height={25}
                width={25}
                alt="skillIcon"
              />
              <p className=" text-center text-base text-white" key={item}>
                {item}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="z-10 w-full justify-evenly bg-violet-300/50">
          <Marquee loop={0} pauseOnHover={true} speed={100}>
            {combinedArray.map(([item, value], index) => (
              <div
                className="m-6 flex flex-row items-center justify-center gap-2 rounded-full px-4 py-2  "
                key={index}
              >
                <Image
                  src={`/Tech logo/${value}`}
                  height={60}
                  width={60}
                  alt="skillIcon"
                />
                <p className=" text-center text-5xl text-black" key={item}>
                  {item}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
}
