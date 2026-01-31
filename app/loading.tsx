import React from "react";
import { PropagateLoader } from "react-spinners";

export default function loading() {
  return (
    <div className=" flex h-screen w-full items-center justify-center bg-white">
      <div className=" flex items-center justify-center">
        <PropagateLoader color="#000" />
      </div>
    </div>
  );
}
