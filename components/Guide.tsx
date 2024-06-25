"use client";
import React, { useState } from "react";

const survivalGuide: { title: string; points: string[] }[] = [
  {
    title: "Alien Repellent",
    points: [
      "Carry a special spray made from common household items like vinegar and garlic.",
      "Aliens are highly sensitive to these odors and will avoid you if they detect the scent.",
    ],
  },
  {
    title: "Protective Gear",
    points: [
      "Wear reflective clothing to confuse alien sensors.",
      "Reflective materials can scatter their scanning beams, making it harder for them to locate you.",
    ],
  },
  {
    title: "Signal Jammer",
    points: [
      "Use a simple radio transmitter.",
      "Tune it to the highest frequency.",
      "Continuously emit static noise to disrupt alien communication.",
    ],
  },
  {
    title: "Underground Shelter",
    points: [
      "Dig a small, concealed underground shelter in your backyard.",
      "Cover it with leaves and branches to avoid detection from above.",
      "Aliens have difficulty scanning through dense ground cover.",
    ],
  },
  {
    title: "Decoy Devices",
    points: [
      "Create basic decoy devices using old electronics.",
      "Set them to emit low-frequency signals.",
      "Place them around your area to divert aliens away from your location.",
    ],
  },
  {
    title: "Alien Translator",
    points: [
      "Develop a basic translator app using your smartphone to understand alien language.",
      "Even simple phrases can help you negotiate or confuse them in critical situations.",
    ],
  },
  {
    title: "Emergency Light",
    points: [
      "Keep a flashlight with a red filter handy.",
      "Aliens have difficulty seeing red light, which can be used to navigate without drawing attention.",
    ],
  },
  {
    title: "Noise Distraction",
    points: [
      "Create noise-making devices from old toys or appliances.",
      "Activate them in different locations to distract and mislead aliens.",
    ],
  },
  {
    title: "Survival Kit",
    points: [
      "Assemble a kit with essential items: water, non-perishable food, first aid supplies, and a compact multi-tool.",
      "Keep this kit ready at all times.",
    ],
  },
  {
    title: "Night Vision",
    points: [
      "Use green-tinted glasses or DIY night vision gear.",
      "Aliens have limited visibility in low-light conditions, giving you an advantage at night.",
    ],
  },
];

export default function Guide() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="py-20 flex min-h-screen pl-4 justify-center font-clash">
      <div className="max-w-[700px] mx-auto w-full flex flex-col">
        <div className="text-main-text whitespace-nowrap font-semibold text-[clamp(24px,6dvw,30px)] flex items-center after:block after:w-[60px] md:after:w-[250px] after:bg-main-text/50 after:h-[1px] after:ml-6">
          Survival Guide
        </div>

        <div className="mt-10 flex w-full md:flex-row flex-col">
          <div className="md:flex relative flex-none hidden flex-col">
            {survivalGuide?.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                style={{
                  color: selected === index ? "#80ffdb" : "#ccd6f680",
                  backgroundColor: selected === index ? "#ccd6f61a" : "",
                }}
                className="text-main-text/50 hover:bg-[#ccd6f6]/10 border-l-[2px] h-[42px] border-main-text/50 flex items-center px-5"
              >
                {item?.title}
              </button>
            ))}
            <div
              className="h-[42px] w-[2px] bg-main-light left-0 top-0 absolute transition-all duration-300"
              style={{ transform: `translateY(${42 * selected}px)` }}
            ></div>
          </div>

          <div className="w-full md:hidden flex overflow-x-scroll">
            <div className="flex relative flex-none">
              {survivalGuide?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  style={{
                    color: selected === index ? "#80ffdb" : "#ccd6f680",
                    backgroundColor: selected === index ? "#ccd6f61a" : "",
                  }}
                  className="text-main-text/50 h-[42px] hover:bg-[#ccd6f6]/10 justify-center border-b-[2px] min-w-[200px] border-main-text/50 flex items-center px-5"
                >
                  {item?.title}
                </button>
              ))}
              <div
                className="h-[2px] w-[200px] bg-main-light left-0 bottom-0 absolute transition-all duration-300"
                style={{ transform: `translateX(${200 * selected}px)` }}
              ></div>
            </div>
          </div>

          <div className="flex-1 py-3 px-4 text-main-text">
            {survivalGuide?.map((item, index) => (
              <div
                className={`flex-col gap-4 ${
                  selected === index ? "flex" : "hidden"
                }`}
                key={index}
              >
                <div className="font-semibold text-xl text-main-light">
                  # {item?.title}
                </div>
                <ul className="">
                  {item?.points?.map((point, i) => (
                    <li
                      key={i}
                      className="mt-2 pl-6 relative before:block before:absolute before:content-['▹'] before:left-0 before:text-main-light"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
