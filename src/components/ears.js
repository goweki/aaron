"use client";
import React, { useEffect, useState } from "react";
import { Ear, EarOff } from "lucide-react";
import { useVoiceToText } from "react-speakup";

export default function Listener() {
  const [isListening, setisListening] = useState(false);
  const { startListening, stopListening, transcript } = useVoiceToText({
    lang: "en-UK",
    continuous: false,
  });

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-6xl">
        <div className="flex flex-row flex-nowrap">
          {/* <div className="card p-0">
            <div className="w-20 flex items-center justify-center aspect-square bg-sky-200/80 hober">
              <Ear
                className="stroke-green-800"
                onClick={startListening}
                role="button"
              />
            </div>
            <div className="w-20 flex items-center justify-center aspect-square bg-sky-200/80">
              <EarOff
                className="stroke-red-800"
                onClick={stopListening}
                role="button"
              />
            </div>
          </div> */}
          <div className="flex items-center justify-center w-full my-8">
            <EarOff
              className={`transition-all ${
                isListening ? "stroke-transparent" : "stroke-red-800"
              }`}
            />
            <label
              htmlFor="toggleListening"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="toggleListening"
                className="sr-only peer"
                checked={isListening}
                onChange={() =>
                  setisListening((prev) => {
                    try {
                      if (!prev) startListening();
                      else stopListening();
                    } catch (err) {
                      console.log("skipping...");
                    }
                    return !prev;
                  })
                }
              />
              <div
                className={`block relative bg-red-200 peer-checked:bg-green-200 shadow border border-gray-300 w-16 h-9 p-1 rounded-full before:absolute before:bg-red-800 before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-emerald-800`}
              />
            </label>
            <Ear
              className={`transition-all ${
                isListening ? "stroke-emerald-800" : "stroke-transparent"
              }`}
            />
          </div>
        </div>
        <h2 className="italic text-center">{transcript}</h2>
      </div>
    </div>
  );
}
