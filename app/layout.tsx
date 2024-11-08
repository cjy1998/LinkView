import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { SiLinkfire, SiJuejin, SiXiaohongshu } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { fontSans } from "@/config/fonts";
import LoginButton from "@/components/login-button";
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
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-screen flex-col">
            <div className="flex items-center justify-between p-4">
              <div className="flex cursor-pointer items-center gap-2">
                <Link
                  className="flex cursor-pointer items-center gap-2"
                  href="/"
                >
                  <SiLinkfire className="text-4xl text-primary" />
                  <h1 className="text-2xl font-bold">LinkView</h1>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <ThemeSwitch />
                <LoginButton />
              </div>
            </div>
            <hr className="my-2 w-full" />
            <main className="container mx-auto max-w-7xl">{children}</main>
            <footer className="flex w-full flex-col items-center justify-center px-5 py-2">
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
                  <Image
                    alt="个人博客"
                    height={15}
                    src="/blog.png"
                    width={15}
                  />
                </Link>
              </div>
              <hr className="my-2 w-full" />
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
      </body>
    </html>
  );
}
