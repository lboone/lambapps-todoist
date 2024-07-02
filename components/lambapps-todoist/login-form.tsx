import React from "react";
import { Separator } from "@/components/ui/separator";
import LoginButtons from "./login-buttons";
const LoginForm = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-between border border-border p-6 m-4 rounded-2xl">
      <h1 className=" text-lg font-semibold">
        Sign in/up with one of the providers below
      </h1>
      <Separator className="w-[50%]" />
      <LoginButtons className="gap-8" />
    </div>
  );
};

export default LoginForm;
