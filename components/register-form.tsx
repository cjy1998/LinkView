"use client";
import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { FaHandsClapping } from "react-icons/fa6";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import { FileUpload } from "@/components/ui/file-upload";
export default function RegisterForm() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    // console.log(files);
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <Card className="p-5">
        <CardBody>
          <div className="mb-5 flex items-center justify-center gap-2">
            <h1 className="text-2xl font-bold">欢迎注册</h1>
            <FaHandsClapping className="text-4xl text-yellow-500" />
          </div>
          <form>
            <div className="mb-5 flex items-center justify-around">
              {/* <p className="text-sm text-gray-500">上传头像</p> */}
              <div className="w-36">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </div>
            <Input
              className="mb-5"
              label="name"
              placeholder="Enter your name"
              type="text"
            />
            <Input
              className="mb-5"
              label="Email"
              placeholder="Enter your email"
              type="email"
            />

            <Input
              autoComplete="current-password"
              className="mb-5"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <Input
              autoComplete="current-password"
              className="mb-5"
              label="Confirm Password"
              placeholder="Enter your confirm password"
              type="password"
            />
            <Button className="mt-5 w-full" color="primary" variant="shadow">
              注册
            </Button>
            <p className="mt-5 text-center text-sm text-gray-500">
              已有账号？{" "}
              <Link className="text-primary" href="/login">
                登录
              </Link>
            </p>
          </form>
        </CardBody>
      </Card>
      {/* <FileUpload onChange={handleFileUpload} /> */}
    </div>
  );
}
