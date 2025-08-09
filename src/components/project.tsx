"use client";

import { ArrowBigLeftDash, Link } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {[...Array(3)].map((_, index) => (
        <CardContainer key={index} className="inter-var cursor-pointer">
            <CardBody className="relative group/card w-full sm:w-72 md:w-64 lg:w-96 h-auto rounded-xl p-4 border border-white/20 bg-[#212529] backdrop-blur-md shadow-lg transition-all duration-300 
            hover:shadow-[0_4px_30px_rgba(173,109,244,0.5)] hover:after:absolute hover:after:inset-0 hover:after:-z-10 hover:after:rounded-xl hover:after:bg-gradient-to-r hover:after:from-green-500 hover:after:via-blue-500 hover:after:to-blue-500 hover:after:blur-2xl hover:after:opacity-5 dark:bg-black/30 dark:border-white/10">
            <CardItem
              translateZ="50"
              className="text-lg font-semibold text-white dark:text-white"
            >
              Creative Center Jawa Barat
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white leading-loose text-justify text-sm mt-2 dark:text-neutral-300"
            >
              In this website there are features for applying for a room loan, viewing schedules, creating an account, verifying an account. My final project got a perfect final grade (A)
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="src\assets\creativejabar.png"
                height="800"
                width="800"
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-lg"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6">
                <img src="src\assets\creativeSkill.png" alt="" />
              <CardItem
                translateZ={20}
                as="button"
                className="px-5 py-2  text-white text-xs border-2 rounded-full"
              >
                View
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
