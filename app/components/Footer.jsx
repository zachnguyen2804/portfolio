import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Footer({ isDarkMode }) {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          zach.ng2804@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>2025 Zach Nguyen. All rights reserved.</p>
        <ul className="flex items-center justify-center mt-4 sm:mt-0 gap-10">
          <li>
            <a target="_blank" href="123">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="123">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="123">
              Connect with me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
