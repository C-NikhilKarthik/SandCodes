import { PiWarningCircleDuotone } from "react-icons/pi";
import React from "react";
import Guide from "@/components/Guide";
import Link from "next/link";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

const headlines = [
  "Global Crisis: Alien forces intensify attacks across major cities worldwide.",
  "Hope Amidst Chaos: SpaceTec’s efforts save thousands from alien threat.",
  // Add more headlines as needed
];

const recentAttacks = [
  {
    location: "Sao Paulo",
    date: "June 29, 2024",
    description: "Alien forces attacked the central business district.",
    casualties: 50,
    saved: 200,
  },
  {
    location: "Melbourne",
    date: "June 28, 2024",
    description: "A surprise night raid in the northern suburbs.",
    casualties: 30,
    saved: 150,
  },
  {
    location: "Dhaka",
    date: "June 27, 2024",
    description: "Heavy assault on government buildings.",
    casualties: 70,
    saved: 100,
  },
  {
    location: "San Francisco",
    date: "June 26, 2024",
    description: "Coordinated alien strike on key infrastructure.",
    casualties: 40,
    saved: 180,
  },
  {
    location: "Tokyo",
    date: "June 25, 2024",
    description: "High-intensity attack on residential areas.",
    casualties: 60,
    saved: 220,
  },
];

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

      <section className="flex flex-col w-full items-center pt-20">
        <div className="py-6 flex gap-4 w-full bg-[#020b15] overflow-clip">
          <div className="flex gap-4 scrolling px-2">
            {headlines.map((headline, index) => (
              <div
                key={index}
                className="w-fit whitespace-nowrap m-2 text-main-light p-2 rounded-lg shadow"
              >
                {headline}
              </div>
            ))}
            {/* Duplicate headlines for infinite scrolling effect */}
            {headlines.map((headline, index) => (
              <div
                key={index + headlines.length}
                className="w-fit whitespace-nowrap m-2 text-main-light p-2 rounded-lg shadow"
              >
                {headline}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl w-full pt-10 flex flex-col gap-2">
          <h1 className="w-full max-w-3xl text-2xl font-semibold text-main-light">
            Updates
          </h1>
          {recentAttacks?.map((attack, index) => (
            <div
              key={index}
              className="w-full mx-auto bg-[#020b15] text-main-text rounded-xl overflow-hidden shadow-md mb-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{attack.location}</div>
                <p className="text-gray-500 text-base">{attack.date}</p>
                <p className="text-gray-500 text-base mt-2">
                  {attack.description}
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Casualties: {attack.casualties}
                </span>
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  Saved: {attack.saved}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col pt-20 px-4 md:px-8 lg:px-10 xl:px-20">
        <h1 className="text-main-text text-[clamp(24px,4dvw,30px)]">
          World Map
        </h1>
        <div className="border rounded border-main-light w-full h-[100dvh] my-10">
          <Map />
        </div>
      </section>

      <Footer />
    </main>
  );
}
