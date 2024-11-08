"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";

import ForgotPasswordForm from "./forgot-password-form";
export default function LoginForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

        <div className="flex w-full justify-end gap-1 p-4">
          <p className="cursor-pointer text-primary" onClick={onOpen}>
            忘记密码？{" "}
          </p>
        </div>
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                找回密码
              </ModalHeader>
              <ModalBody className="py-8">
                <ForgotPasswordForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
