"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="h-[80vh] w-full" />,
});

function Skill3d() {
  return (
    <div className="absolute z-0 h-[80vh] w-full">
      <Suspense fallback={<div className="h-[80vh] w-full" />}>
        <Spline scene="https://prod.spline.design/c040WGtElTcDEf88/scene.splinecode" />
      </Suspense>
    </div>
  );
}

export default Skill3d;
