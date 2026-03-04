import React from "react";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

const Status = () => {
  return (
    <div className="flex flex-col gap-5">
      <TaskStatus></TaskStatus>
      <ResolvedTask></ResolvedTask>
    </div>
  );
};

export default Status;
