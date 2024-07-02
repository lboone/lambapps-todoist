"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Tasks = () => {
  const tasks = useQuery(api.tasks.get);
  return <>{tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}</>;
};

export default Tasks;
