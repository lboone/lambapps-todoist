import React from "react";
import { ConvexClientProvider } from "@/app/providers";
import { auth } from "@/auth";

const LoggedInLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <div>
      <ConvexClientProvider session={session}>{children}</ConvexClientProvider>
    </div>
  );
};

export default LoggedInLayout;
