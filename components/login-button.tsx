"use client";

import { IoIosLogIn } from "react-icons/io";
import { useRouter } from "next/navigation";
export default function LoginButton() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <IoIosLogIn className="cursor-pointer text-2xl" onClick={handleLogin} />
  );
}
