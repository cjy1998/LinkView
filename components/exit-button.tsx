// "use client";
import { Avatar } from "@nextui-org/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { IoMdExit } from "react-icons/io";
import { Button } from "@nextui-org/button";

import { signOut } from "@/auth";

const ExitButton = ({ name }: { name: string }) => {
  return (
    <div className="">
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar isBordered className="h-8 w-8 cursor-pointer" name={name} />
        </PopoverTrigger>
        <PopoverContent>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              className="bg-white"
              endContent={<IoMdExit className="text-2xl" />}
              type="submit"
            >
              退出
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ExitButton;
