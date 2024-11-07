import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { SiLinkfire, SiJuejin, SiXiaohongshu } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import { Providers } from "../providers";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <div className="relative flex flex-col h-screen">
        <div className="flex justify-between p-4">
          <div className="flex items-center gap-2">
            <SiLinkfire className="text-4xl text-primary" />
            <h1 className="text-2xl font-bold ">Link View</h1>
          </div>
          <ThemeSwitch />
        </div>
        <main className="container mx-auto max-w-7xl ">{children}</main>
        <footer className="w-full flex flex-col items-center justify-center py-2 px-5">
          <div className="flex items-center gap-5">
            <Link href="https://github.com/cjy1998">
              <FaGithub className="text-2xl" />
            </Link>
            <Link href="https://juejin.cn/user/3751955760443165">
              <SiJuejin className="text-2xl" />
            </Link>
            <Link href="https://www.xiaohongshu.com/user/profile/650daafd00000000170200d3">
              <SiXiaohongshu className="text-2xl" />
            </Link>
            <Link href="https://cjy1998.github.io/vitepress/">
              <Image alt="个人博客" height={15} src="/blog.png" width={15} />
            </Link>
          </div>
          <hr className="w-full my-2" />
          <div className="flex items-center">
            <Link
              isExternal
              className="flex items-center gap-1 text-current"
              href="https://portfolio-website-smoky-one-44.vercel.app/"
              title="nextui.org homepage"
            >
              <span className="text-default-600">Copyright © 2024</span>
              <p className="text-primary">Jian Chen</p>
            </Link>
          </div>
        </footer>
      </div>
    </Providers>
  );
}