import React from "react";
import { FlipWords } from "../../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-extrabold text-neutral-700 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
