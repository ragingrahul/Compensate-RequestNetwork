import React from "react";

export function GridBackground() {
  return (
    <div className="h-[70rem] w-full bg-purple-200 bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-start justify-start dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div> */}
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" />
    </div>
  );
}
