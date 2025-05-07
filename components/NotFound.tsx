import Image from "next/image";
import React from "react";
import notfound from "@/assets/images/notfound.png";
import { inter } from "@/fonts";

function NotFound({ className }: { className: string }) {
  return (
    <section className={`flex justify-center items-center ${className}`}>
      <div>
        <Image
          src={notfound}
          width={100}
          height={100}
          alt="No results for your search!"
          className="m-auto"
        />
        <p
          className={`mt-10 max-w-52 text-center text-[#7F7F7F] ${inter.className}`}
        >
          No results for your search! Try another keyword
        </p>
      </div>
    </section>
  );
}

export default NotFound;
