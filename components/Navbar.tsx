"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export default function Navbar() {
  const staggerChildren = 0.2;

  return (
    <motion.nav className="w-full fixed z-50 backdrop-blur-sm top-0 flex justify-between left-0 font-clash p-4 tracking-wider leading-[1.1]">
      <motion.span
        className="text-white font-semibold text-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: staggerChildren * 0 }}
      >
        SpaceTec
      </motion.span>

      <motion.div
        className="hidden md:flex gap-5 items-center rounded-full py-2 px-6 backdrop-blur border border-main-light bg-main-light/20 text-white"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: staggerChildren * 1 }}
      >
        <Link href={"#about"} className="">
          About
        </Link>
        <Link href={"#updates"} className="">
          Updates
        </Link>
        <Link href={"#guide"} className="">
          Guide
        </Link>
      </motion.div>

      <motion.div
        className="rounded border border-main-light flex items-center text-main-light px-4 py-2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: staggerChildren * 2 }}
      >
        Talk to us
      </motion.div>
    </motion.nav>
  );
}
