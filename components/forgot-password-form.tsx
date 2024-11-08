"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { FaArrowRight } from "react-icons/fa";
const ForgotPasswordForm = () => {
  const [step, setStep] = useState(1); // 1: 邮箱, 2: 验证码, 3: 新密码
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 发送验证码到邮箱
    setStep(2);
  };

  const handleVerifyCode = () => {
    // e.preventDefault();
    setIsLoading(true);
    // TODO: 验证验证码
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setTimeout(() => {
      setStep(3);
    }, 5000);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 提交新密码
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      {step === 1 && (
        <form className="space-y-4" onSubmit={handleSubmitEmail}>
          <Input
            required
            placeholder="请输入邮箱"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="float-right w-36"
            color="primary"
            type="submit"
            onClick={() => setStep(2)}
          >
            下一步 <FaArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      )}

      {step === 2 && (
        <form className="space-y-4">
          <Input
            required
            placeholder="请输入验证码"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button
            className="float-right w-36"
            color="success"
            isLoading={isLoading}
            onClick={handleVerifyCode}
          >
            验证{isLoading && "..."}
          </Button>
        </form>
      )}

      {step === 3 && (
        <form className="space-y-4" onSubmit={handleResetPassword}>
          <Input
            required
            placeholder="请输入新密码"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button className="float-right w-36" color="secondary" type="submit">
            重置密码
          </Button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
