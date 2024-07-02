import Tasks from "@/components/lambapps-todoist/tasks";
import React from "react";
import UserProfile from "@/components/lambapps-todoist/user-profile";

const LoggedIn = () => {
  return (
    <>
      <h1>LAMB Apps Todoist</h1>
      <UserProfile />
      <Tasks />
    </>
  );
};

export default LoggedIn;
