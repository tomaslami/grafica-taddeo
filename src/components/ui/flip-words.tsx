"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  className,
  currentIndex,
}: {
  words: string[];
  className?: string;
  currentIndex: number;
  backgroundColor?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    setCurrentWord(words[currentIndex % words.length]);
  }, [currentIndex, words]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "z-10 inline-flex items-center px-4 py-2 text-left relative",
          className
        )}
      >
        <div className="flex flex-wrap">
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.1,
                duration: 0.2,
              }}
              className="inline-flex mr-2 text-black font-medium"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * 0.1 + letterIndex * 0.05,
                    duration: 0.1,
                  }}
                  className="inline-block text-black"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

