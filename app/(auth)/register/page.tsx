import { Metadata } from "next";

import RegisterForm from "@/components/register-form";
export const metadata: Metadata = {
  title: "注册",
};
export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-170px)] flex-col gap-0 p-5">
      <RegisterForm />
    </div>
  );
}
