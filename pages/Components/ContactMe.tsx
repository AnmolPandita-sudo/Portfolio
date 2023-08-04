"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:anmol.ap12@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. %0D%0A%0D%0A${formData.message}.%0D%0A%0D%0A${formData.email}`);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        id="contactme"
        className="h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
      >
        <h3 className="absolute top-24 uppercase tracking-[17px] text-gray-500 font-bold text-2xl">
          Contact
        </h3>
        <div className="flex flex-col space-y-10 mt-16">
          <h4 className=" text-xl md:text-4xl font-semibold text-center">
            I got just what you need. <br />
            <span className="underline decoration-[#c0d21d]/50">Lets Talk</span>
          </h4>

          <div>
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="md:text-2xl">+919796657649</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="md:text-2xl">anmol.ap12@gmail.com</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="md:text-2xl">Jammu & Kashmir</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 mx-auto"
          >
            <div className="flex space-x-1">
              <input
                {...register("name")}
                placeholder="Name"
                className="ContactInput md:w-auto w-[150px]"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="ContactInput md:w-auto w-[150px]"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="ContactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="ContactInput"
            />
            <button
              type="submit"
              className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg "
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactMe;
