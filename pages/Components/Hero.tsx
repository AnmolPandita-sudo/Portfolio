"use client";
import "app/globals.css";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/pages/Components/BackgroundCircles";
import Image from "next/image";
import image from "../images/hero_image.jpg";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Anmol",
      "Guy who loves coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-x-hidden">
      <BackgroundCircles />
      <Image
        src={image}
        alt="Logo"
        width={150}
        height={150}
        className=" rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Front-end Developer
        </h2>
        <h1 className="text-2xl lg:text-6xl font-semibold px-10 ">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-20 space-x-2">
          <Link href="#about">
            <button className="HeroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="HeroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="HeroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="HeroButton">Projects</button>
          </Link>
          <Link href="#contactme">
            <button className="HeroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
