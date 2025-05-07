import React from "react";
import Image from "next/image";
import logo from "@/assets/images/NHC.png";
import vision2030 from "@/assets/images/Vision2030 White.png";
import { able } from "@/fonts";

function Footer() {
  return (
    <footer className="bg-secondaryDarkPurple mt-4 py-5">
      <div className="mt-10 mx-14 border-t border-[#F1F1F1]/20 flex flex-col gap-3 lg:flex-row lg:justify-between items-center text-white py-2">
        <div className="flex gap-6 items-center pt-2">
          <Image src={logo} alt="logo" />
          <Image src={vision2030} alt="logo" />
        </div>
        <div className={`text-sm ${able.className}`}>
          All rights reserved © 2022 - Developed and operated by National
          Housing
        </div>
      </div>
    </footer>
  );
}

export default Footer;
