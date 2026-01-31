"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="h-[40vh] w-full sm:h-[60vw]" />,
});

function Hero3d() {
  return (
    <div className="mr-[5vh] h-[40vh] w-full sm:mb-[-12vw] sm:h-[60vw] sm:max-h-[650px] sm:w-[60vw] 2xl:mb-[-7vw]">
      <Suspense fallback={<div className="h-[40vh] w-full sm:h-[60vw]" />}>
        <Spline scene="https://prod.spline.design/d-mvfO2CGrqE6Oxw/scene.splinecode" />
      </Suspense>
    </div>
  );
}

export default Hero3d;
