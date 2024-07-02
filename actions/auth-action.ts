"use server";

import { signIn } from "@/auth";

export async function signInActionGoogle() {
  await signIn("google", { redirectTo: "/loggedin" });
}

export async function signInActionGithub() {
  await signIn("github", { redirectTo: "/loggedin" });
}
