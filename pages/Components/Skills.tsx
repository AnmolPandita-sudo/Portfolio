"use client";
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="skill"
      className="h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[17px] text-gray-500 font-bold text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-32 uppercase tracking-[10px] text-gray-500 font-bold md:text-lg text-xs mx-3 ">
        Hover Over A Skill for current profieciency.
      </h3>

      <div className="grid grid-cols-4 md:gap-5 gap-2 mt-24">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
