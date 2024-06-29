import { PiWarningCircleDuotone } from "react-icons/pi";
import React from "react";
import Guide from "@/components/Guide";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <section className="w-full px-4 h-screen bg-[url('/landing.jpg')] bg-cover bg-top flex flex-col gap-4 items-center justify-center">
        <div className="fixed flex z-10 font-clash gap-4 origin-top-left -rotate-90 bg-main-light/20 border border-main-light border-t-0 rounded-b text-main-text items-start leading-[1.1] backdrop-blur left-0 top-1/2 translate-y-full p-3 transform">
          <div className="">Warning</div>
          <PiWarningCircleDuotone className="rotate-90 text-red-500 text-2xl" />
        </div>

        <div className="flex text-main-text text-center font-clash flex-col items-center p-4 rounded leading-[1.1] backdrop-blur relative">
          <div id="top-left" className="corner"></div>
          <div id="top-right" className="corner"></div>
          <div id="bottom-right" className="corner"></div>
          <div id="bottom-left" className="corner"></div>
          <p className="text-[clamp(44px,8dvw,72px)] font-bold">
            Defend Hackunia:
          </p>
          <p className="text-[clamp(24px,6dvw,44px)]">
            Join the Fight Against the Alien Invasion!
          </p>
          <p className="text-xl max-w-[900px] text-center mt-10">
            SpaceTec is mobilizing all resources to protect Hackunia. Stay
            informed, stay safe, and contribute to our mission.
          </p>
        </div>

        <Link
          href={"/dashboard"}
          className="rounded border border-main-light transition-all duration-300 text-main-light px-4 py-2 hover:px-6"
        >
          Dashboard
        </Link>
      </section>

      <Guide />
    </main>
  );
}
