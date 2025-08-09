
import React from "react";
import { Timeline } from "./timeline";

export function TimelineWork() {
  const data = [
    {
      title: "Universitas Komputer Indonesia",
      content: (
        <div>
          <p className="text-white text-md leading-loose text-justify font-normal mb-8">
          I pursued a degree in Information Systems at Universitas Komputer Indonesia and graduated with a commendable <span className="font-bold text-yellow-300">GPA of 3.75. </span>  
          During my studies, I worked on projects that aligned with my career interests, including my thesis project, Room Booking System for a Creative Center building with ReactJS.
          </p>
          <div className="">
            <img
              src="src\assets\unikom.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Kampus Merdeka x Alterra Academy",
      content: (
        <div>
            <p className="text-white text-md leading-loose text-justify font-normal mb-8">During my studies, I participated in the Kampus Merdeka: Studi Independen program with Alterra Academy, where I completed the Front-End Engineer Career with ReactJS course. This program provided hands-on experience in building modern web applications,<span className="font-semibold text-yellow-300"> enhancing my skills in ReactJS, JavaScript, and front-end development best practices.</span></p>
          <div className="">
            <img
              src="src\assets\certificate.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    }
  ];
  return (
    <div className="w-full">
      <Timeline 
        title="Work Experience"  
        gradientColors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} 
        data={data} 
      />
    </div>
  );
}
