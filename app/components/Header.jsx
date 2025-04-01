import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Since this is a div, we have to use motion.div, if its a button for example, then we use motion.button */}
      {/* scale: 0 means hidden, scale: 1 is to display it */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Zach Nguyen{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        frontend web developer based in Vietnam.
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-Ovo"
        >
          I am a frontend developer from Ho Chi Minh City, Vietnam with 1 year
          of experience working at a startup company based in Boulder, Colorado
          USA
        </motion.p>
        <div className="flex items-center flex-col sm:flex-row gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="flex items-center gap-2 rounded-full px-10 py-3 border border-white bg-black text-white dark:bg-transparent"
          >
            contact me{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/sample-resume.pdf"
            download
            className="flex items-center gap-2 rounded-full px-10 py-3 border border-gray-500 bg-white dark:text-black"
          >
            my resume{" "}
            <Image src={assets.download_icon} alt="" className="w-4" />
          </motion.a>
        </div>
      </motion.h1>
    </div>
  );
}
