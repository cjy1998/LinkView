import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { sql } from "@vercel/postgres";

import { User } from "./app/lib/types";
import { authConfig } from "./auth.config";

// 从数据库获取用户信息
const getUser = async (email: string): Promise<User | undefined> => {
  try {
    const user =
      await sql<User>`SELECT * FROM link_view_users WHERE email=${email}`;

    return user.rows[0];
  } catch (error) {
    // console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user");
  }
};

// 配置 NextAuth
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // 登录验证逻辑
      async authorize(credentials) {
        // 前端校验数据格式
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          // console.error("Invalid input:", parsedCredentials.error.errors);

          return null; // 验证失败，返回 null
        }

        const { email, password } = parsedCredentials.data;

        // 从数据库查询用户
        const user = await getUser(email);

        if (!user) {
          // console.log("User not found");

          return null; // 用户不存在，返回 null
        }

        // 验证密码
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          // console.log("Invalid password");

          return null; // 密码错误，返回 null
        }

        // 返回用户对象
        return user;
      },
    }),
  ],
});
