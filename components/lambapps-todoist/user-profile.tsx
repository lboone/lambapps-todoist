"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

type Props = {
  imageSize?: number;
  imageClassName?: string;
};

const UserProfile = ({ imageSize = 32, imageClassName }: Props) => {
  const session = useSession();
  return (
    <div className="flex items-center gap-2 p-1">
      <Image
        src={session?.data?.user?.image!}
        width={imageSize}
        height={imageSize}
        alt="user profile picture"
        className={cn("rounded-full", imageClassName)}
      ></Image>
      <div className="text-primary">{session?.data?.user?.name}</div>
    </div>
  );
};

export default UserProfile;
