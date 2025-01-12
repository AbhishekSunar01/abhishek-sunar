"use client";
import React from "react";

export function Desc() {
  return (
    <div className="flex justify-center items-center h-[6rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        So these are the few of the{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          {" "}
          skills{" "}
        </span>{" "}
        I have learned throughout my journey
      </p>
    </div>
  );
}
