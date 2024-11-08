import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

import { cn } from "@/app/lib/utils";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onChange && onChange(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      //   console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        className="group/file relative block w-full cursor-pointer overflow-hidden rounded-lg"
        whileHover="animate"
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          className="hidden"
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
        />
        {/* <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div> */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative mx-auto w-full max-w-[20rem]">
            {/* {files.length > 0 &&
              files.map((file, idx) => (
                <motion.div
                  key={"file" + idx}
                  className={cn(
                    "relative z-40 mx-auto flex w-full flex-col items-start justify-start overflow-hidden rounded-md bg-white dark:bg-neutral-900 md:h-4",
                    "shadow-sm"
                  )}
                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <motion.p
                      layout
                      animate={{ opacity: 1 }}
                      className="max-w-xs truncate text-base text-neutral-700 dark:text-neutral-300"
                      initial={{ opacity: 0 }}
                    >
                      {file.name}
                    </motion.p>
                    <motion.p
                      layout
                      animate={{ opacity: 1 }}
                      className="shadow-input w-fit flex-shrink-0 rounded-lg px-2 py-1 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white"
                      initial={{ opacity: 0 }}
                    >
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </motion.p>
                  </div>

                  <div className="flex w-full flex-col items-start justify-between text-sm text-neutral-600 dark:text-neutral-400 md:flex-row md:items-center">
                    <motion.p
                      layout
                      animate={{ opacity: 1 }}
                      className="rounded-md bg-gray-100 px-1 py-0.5 dark:bg-neutral-800"
                      initial={{ opacity: 0 }}
                    >
                      {file.type}
                    </motion.p>

                    <motion.p
                      layout
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                    >
                      modified{" "}
                      {new Date(file.lastModified).toLocaleDateString()}
                    </motion.p>
                  </div>
                </motion.div>
              ))} */}
            {!files.length && (
              <motion.div
                className={cn(
                  "relative z-40 mx-auto mt-4 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full bg-white group-hover/file:shadow-2xl dark:bg-neutral-900",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}
                layoutId="file-upload"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                variants={mainVariant}
              >
                {isDragActive ? (
                  <motion.p
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center text-neutral-600"
                    initial={{ opacity: 0 }}
                  >
                    Drop it
                    <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </motion.p>
                ) : (
                  <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                )}
              </motion.div>
            )}

            {!files.length && (
              <motion.div
                className="absolute inset-0 z-30 mx-auto mt-4 flex h-16 w-full max-w-[4rem] items-center justify-center rounded-full border border-dashed border-sky-400 bg-transparent opacity-0"
                variants={secondaryVariant}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;

  return (
    <div className="flex flex-shrink-0 scale-105 flex-wrap items-center justify-center gap-x-px gap-y-px bg-gray-100 dark:bg-neutral-900">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;

          return (
            <div
              key={`${col}-${row}`}
              className={`flex h-10 w-10 flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:bg-neutral-950 dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
