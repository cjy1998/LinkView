import Image from "next/image";

import LoginForm from "@/components/login-form";
export default function LoginPage() {
  return (
    <div className="flex md:flex-row flex-col  min-h-[calc(100vh-170px)] gap-0 p-5">
      <Image
        alt="login"
        className="md:hidden p-5 h-[390px] w-auto"
        height={100}
        src="/loginArt.png"
        width={345}
      />
      <div className="flex-1">
        <LoginForm />
      </div>

      <Image
        alt="login"
        className="hidden md:block h-[590px] w-auto flex-1 object-contain"
        height={300}
        src="/loginArt.png"
        width={200}
      />
    </div>
  );
}
