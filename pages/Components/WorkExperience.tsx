"use client";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        id="experience"
        className="h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
      >
        <h3 className="absolute top-20 uppercase tracking-[12px] text-gray-500 font-bold text-2xl">
          Experience
        </h3>

        <div className="w-full flex flex-row space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </div>
  );
}

export default WorkExperience;
