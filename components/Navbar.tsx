import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 flex justify-between left-0 p-4 border-b-[1px] border-gray-500">
      <span className="text-white font-semibold text-xl">SpaceTec</span>
      <div className="flex gap-3 text-sm items-center text-white">
        <Link href={"/about"} className="">
          About
        </Link>
        <Link href={"/updates"} className="">
          Updates
        </Link>
        <Link href={"/guide"} className="">
          Guide
        </Link>
      </div>
    </nav>
  );
}
