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
import { useState } from "react";

import ForgotPasswordForm from "./forgot-password-form";

import { authenticate } from "@/app/lib/service";

const initialState = {
  message: "",
};

export default function LoginForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const [errorMessage, formAction, isPending] = useActionState(
  //   authenticate,
  //   undefined
  // );
  // const [state, formAction] = useFormState(authenticate, initialState);
  // const { pending } = useFormStatus();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit() {
    const data = new FormData();

    data.append("email", formData.email);
    data.append("password", formData.password);

    // 调用你的 authenticate 函数
    const result = await authenticate(null, data);
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-5 flex items-center gap-2">
        <h1 className="text-2xl font-bold">欢迎回来</h1>
        <FaHandsClapping className="text-4xl text-yellow-500" />
      </div>
      {/* action={formAction} */}
      <form className="w-full">
        <Input
          isRequired
          className="mb-5"
          defaultValue="example@example.com"
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />

        <Input
          isRequired
          autoComplete="current-password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />

        <div className="flex w-full justify-end gap-1 p-4">
          <p className="cursor-pointer text-primary" onClick={onOpen}>
            忘记密码？{" "}
          </p>
        </div>
        {/* aria-disabled={isPending} */}
        <Button
          className="w-full"
          color="primary"
          variant="shadow"
          onClick={handleSubmit}
        >
          登录
        </Button>
        {/* <p aria-live="polite" className="not-sr-only">
          {state?.message}
        </p> */}
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
          {() => (
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
