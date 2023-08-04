import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        y: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: [0.1, 0, 0, 0, 0.5],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#ffae00] rounded-full h-[200px] w-[200px] mt-64 animate-ping" />
      <div className="absolute border border-[#f7b11b] rounded-full h-[300px] w-[300px] mt-64" />
      <div className="absolute border border-[#b88517] rounded-full h-[400px] w-[400px] mt-64" />
      <div className="absolute border border-[#d97c11]  rounded-full h-[550px] w-[550px] mt-64 animate-pulse" />
      <div className="absolute border border-red-600 rounded-full h-[550px] w-[550px] mt-64" />
    </motion.div>
  );
}

export default BackgroundCircles;
