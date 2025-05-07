"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import { able } from "../fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathName = usePathname();
  const product = pathName !== "/about";
  const about = pathName === "/about";

  return (
    <nav
      className={`flex gap-16 items-center px-4 py-4 bg-[#D9D9D91F] ${able.className}`}
    >
      <Image src={logo} alt="logo" />
      <ul className="flex gap-6 cursor-pointer">
        <Link href={"/"} className={`${product ? "text-nhc" : ""}`}>
          Products
        </Link>
        <Link href={"about"} className={`${about ? "text-nhc" : ""}`}>
          About
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
