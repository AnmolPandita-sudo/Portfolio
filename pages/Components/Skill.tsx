"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
        alt=""
        className="rounded-full border-gray-500 w-20 h-20 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out justify-center items-center"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white w-20 h-20 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">85%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
