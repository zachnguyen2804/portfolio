import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Zach Nguyen{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        frontend web developer based in Vietnam.
        <p className="max-w-2xl mx-auto font-Ovo">
          I am a frontend developer from Ho Chi Minh City, Vietnam with 1 year
          of experience working at a startup company based in Boulder, Colorado
          USA
        </p>
        <div className="flex items-center flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full px-10 py-3 border border-white bg-black text-white"
          >
            contact me{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className="flex items-center gap-2 rounded-full px-10 py-3 border border-gray-500"
          >
            my resume{" "}
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </h1>
    </div>
  );
}
