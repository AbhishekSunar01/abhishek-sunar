"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Github, Mail } from "lucide-react";
export function Footer() {
  const words = [
    {
      text: "Hire",
    },
    {
      text: "me",
    },
    {
      text: "for",
    },
    {
      text: "building",
    },
    {
      text: "your",
    },
    {
      text: "Website.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Thank you for visiting my portfolio
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="px-4 gap-2 flex items-center h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Mail size={20} />
          a8hishek@gmail.com
        </button>
        <button className="px-4 gap-2 flex items-center h-10 rounded-xl bg-white text-black border border-black  text-sm">
          <Github size={20} />
          AbhishekSunar01
        </button>
      </div>
    </div>
  );
}
