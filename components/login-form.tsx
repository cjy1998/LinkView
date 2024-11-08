import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
export default function LoginForm() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-5 flex items-center gap-2">
        <h1 className="text-2xl font-bold">欢迎回来</h1>
        <FaHandsClapping className="text-4xl text-yellow-500" />
      </div>

      <form className="w-full">
        <Input
          className="mb-5"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          autoComplete="current-password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        <Link
          className="flex w-full justify-end gap-1 p-4"
          href="/forgot-password"
        >
          <p className="text-primary">忘记密码？ </p>
        </Link>
        <Button className="w-full" color="primary" variant="shadow">
          登录
        </Button>
        <div className="my-8 flex items-center">
          <div className="h-[1px] flex-1 bg-default-200" />
          <span className="px-3 text-sm text-default-400">Or</span>
          <div className="h-[1px] flex-1 bg-default-200" />
        </div>
        <Button
          className="mb-4 w-full"
          color="default"
          startContent={<FaGoogle />}
        >
          使用Google登录
        </Button>
        <Button
          className="mb-4 w-full"
          color="default"
          startContent={<FaGithub />}
        >
          使用Github登录
        </Button>
        <Button
          className="mb-4 w-full"
          color="default"
          startContent={<IoLogoWechat />}
        >
          使用微信登录
        </Button>
        <div className="flex justify-end">
          <p className="text-default-400">没有账号？</p>
          <Link href="/register">
            <p className="text-primary">去注册</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
