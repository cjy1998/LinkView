"use client";
import { Avatar } from "@nextui-org/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { IoMdExit } from "react-icons/io";

// import { signOut } from "@/auth";

const ExitButton = ({ name }: { name: string }) => {
  const handleExit = async () => {
    // "use server";
    // await signOut();
  };

  return (
    <div className="">
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar isBordered className="h-10 w-10 cursor-pointer" name={name} />
        </PopoverTrigger>
        <PopoverContent>
          <div
            className="flex cursor-pointer items-center gap-2 px-1 py-2 text-zinc-600"
            role="button"
            tabIndex={0}
            onClick={handleExit}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleExit();
              }
            }}
          >
            <p className="font-bold">退出</p>
            <IoMdExit className="text-2xl" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ExitButton;
