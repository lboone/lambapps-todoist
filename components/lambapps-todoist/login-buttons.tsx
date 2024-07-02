import React from "react";
import LoginGoogle from "@/components/lambapps-todoist/login-google";
import LoginGithub from "@/components/lambapps-todoist/login-github";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
const LoginButtons = ({ className }: Props) => {
  return (
    <div className={cn("flex items-center gap-4 p-2", className)}>
      <LoginGoogle />
      <LoginGithub />
    </div>
  );
};

export default LoginButtons;
