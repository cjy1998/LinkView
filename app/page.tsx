"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
export default function Home() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "LinkView.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section className="flex min-h-[calc(100vh-170px)] flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:px-0">
      {/* <h1 className="text-4xl font-bold">
        Welcome to <p className="inline-block text-primary">LinkView</p>
      </h1> */}
      <TypewriterEffect words={words} />
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p className="max-w-md text-lg text-gray-600">
          它允许用户轻松地收藏自己喜欢的网址并进行分类
        </p>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          ease: "linear",
          duration: 1,
          delay: 2.5,
          x: { duration: 1 },
        }}
      >
        <Link
          prefetch
          className="flex items-center gap-2 text-primary"
          href="/login"
        >
          <span className="text-lg font-medium">Let&apos;s get started!</span>
          <motion.a whileHover={{ scale: 1.5 }}>
            <FaLocationArrow className="h-5 w-5" />
          </motion.a>
        </Link>
      </motion.div>
    </section>
  );
}
