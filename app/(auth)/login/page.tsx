import Image from "next/image";
import { Metadata } from "next";

import LoginForm from "@/components/login-form";
export const metadata: Metadata = {
  title: "登录",
};
export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-170px)] flex-col gap-0 p-5 md:flex-row">
      <Image
        alt="login"
        className="h-[390px] w-auto p-5 md:hidden"
        height={100}
        src="/loginArt.png"
        width={345}
      />
      <div className="flex-1">
        <LoginForm />
      </div>

      <Image
        alt="login"
        className="hidden h-[590px] w-auto flex-1 object-contain md:block"
        height={300}
        src="/loginArt.png"
        width={200}
      />
    </div>
  );
}
