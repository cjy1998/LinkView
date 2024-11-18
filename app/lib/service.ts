"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";

export const authenticate = async (prevState: any, formData: FormData) => {
    try {
        await signIn("credentials", formData, { redirectTo: "/list" });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        message: "Invalid credentials.",
                    };
                default:
                    return {
                        message: "Something went wrong.",
                    };
            }
        }
        throw error;
    }
};
