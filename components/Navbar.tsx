import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed z-50 backdrop-blur-sm top-0 flex justify-between left-0 font-clash p-4 tracking-wider leading-[1.1]">
      <span className="text-white font-semibold text-2xl">SpaceTec</span>
      <div className="hidden md:flex gap-5 items-center rounded-full py-2 px-6 backdrop-blur border border-main-light bg-main-light/20 text-white">
        <Link href={"#about"} className="">
          About
        </Link>
        <Link href={"#updates"} className="">
          Updates
        </Link>
        <Link href={"#guide"} className="">
          Guide
        </Link>
      </div>

      <div className="rounded border border-main-light flex items-center text-main-light px-4 py-2">
        Talk to us
      </div>
    </nav>
  );
}
