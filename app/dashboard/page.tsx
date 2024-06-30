import React from "react";
import type { Metadata } from "next";
import { IconType } from "react-icons";
import { GiDeathSkull } from "react-icons/gi";
import { TbAccessPoint, TbAccessPointOff } from "react-icons/tb";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

const info: { title: string; icon: IconType; amount: number }[] = [
  {
    title: "Alive",
    icon: TbAccessPoint,
    amount: 3456781,
  },
  {
    title: "Deaths",
    icon: GiDeathSkull,
    amount: 671340,
  },
  {
    title: "Unknown",
    icon: TbAccessPointOff,
    amount: 3801830,
  },
];

const IconComponent: React.FC<IconProps> = ({
  icon: Icon,
  size = 24,
  color = "#ccd6f6",
}) => {
  return <Icon size={size} color={color} />;
};

export default function Page() {
  return (
    <main className="w-full min-h-screen font-clash">
      <section className="flex flex-col pt-20 px-4 md:px-8 lg:px-10 xl:px-20">
        <h1 className="text-main-text text-[clamp(24px,4dvw,30px)]">
          Overview
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-6">
          {info?.map((item, index) => (
            <div
              key={index}
              //   className="basis-1/3 flex flex-col bg-main-text/40 p-4 rounded"
              className="basis-1/3 flex flex-col bg-main-light/20 hover:bg-main-light/30 transition-all duration-300 border border-main-light p-4 rounded"
            >
              <IconComponent
                icon={item?.icon}
                size={44}
                color={index === 0 ? "#D2042D" : "#ccd6f6"}
              />
              <div className="text-2xl text-main-text mt-6 mb-1">
                {item?.title}
              </div>
              <div className="text-base text-main-light">{item?.amount}</div>
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

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of SpaceTec",
};
