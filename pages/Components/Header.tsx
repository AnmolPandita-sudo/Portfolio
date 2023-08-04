"use client";
import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-1 p-5 flex items-start justify-between mx-auto max-w-7xl z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center "
      >
        <SocialIcon
          url="https://t.me/VedicSeeker"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100009989494240"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/AnmolPandita-sudo/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.instagram.com/anmol_pandita01/"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center text-gray-400"
      >
        <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
        <p className="hidden md:inline-flex text-sm text-gray-500">
          GET IN TOUCH
        </p>
      </motion.div>
    </header>
  );
}
