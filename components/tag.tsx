"use client";
import { motion } from "framer-motion";
import {
  AiFillStar,
  AiFillTags,
  AiFillPlusCircle,
  AiFillHeart,
  AiFillUpCircle,
  AiFillAliwangwang,
} from "react-icons/ai";
export default function Tag({ className }: { className?: string }) {
  const icons = [
    { component: AiFillPlusCircle, id: "add" },
    { component: AiFillStar, id: "star" },
    { component: AiFillTags, id: "tags" },
    { component: AiFillHeart, id: "heart" },
    { component: AiFillAliwangwang, id: "rabot" },
    { component: AiFillUpCircle, id: "up" },
  ];

  return (
    <div className={`flex h-screen items-center justify-center ${className}`}>
      <div className="flex h-[280px] w-10 flex-col items-center justify-center gap-5 rounded-sm bg-gray-50 dark:bg-neutral-900">
        {icons
          .filter((item) => item.id !== "rabot") // 过滤掉 id 为 "rabot" 的图标
          .map((item) => (
            <motion.div
              key={item.id}
              className="cursor-pointer"
              style={{ willChange: "transform" }}
              whileHover={{
                scale: 1.5,
                rotate: 0,
                transition: { duration: 0.3 },
              }}
            >
              <item.component className="h-6 w-6 hover:text-primary-500" />
            </motion.div>
          ))}
        {icons
          .filter((item) => item.id === "rabot") // 过滤掉 id 为 "rabot" 的图标
          .map((item) => (
            <motion.div
              key={item.id}
              animate={{
                y: [0, -10, 0], // 垂直方向的关键帧
              }}
              className="cursor-pointer"
              style={{ willChange: "transform" }}
              transition={{
                duration: 1, // 每次循环的时间
                ease: "easeInOut", // 平滑过渡
                repeat: Infinity, // 无限循环
                delay: 0.2, // 每个图标的动画有微小延迟
              }}
            >
              <item.component className="h-6 w-6 text-primary-500" />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
