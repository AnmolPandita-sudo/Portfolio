/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import AboutImage from "../images/About_Image.png";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[15px] text-gray-500 font-bold text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      />
      <Image
        src={AboutImage}
        alt="AboutImage"
        width={150}
        height={150}
        className="w-36 h-52  md:mb-0 rounded-3xl object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[1000px] xl:h-[500px]"
      />

      <div className="space-y-2 px-0 md:px-10">
        <h4 className="md:text-7xl text-xl text-[#be9292] font-crimson">
          Here is a <span className="underline underline-offset-1">little</span>{" "}
          background
        </h4>
        <p className="md:text-2xl text-xs">
          To start my career as a technical person in software field by using my
          technical knowledge and skills in learning environment for the better
          growth of the organization. I am a hardworking and ambitious
          individual with a great passion for the transport and logistics
          industry. I have excellent communication skills, enabling me to
          effectively communicate with a wide range of people. I am seeking a
          position in the industry in which I can put into practice my knowledge
          and experience, ultimately benefiting the operations of the
          organization that I work for. I am Self-Motivated , Creative and
          Adaptable.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
