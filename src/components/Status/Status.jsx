import React from "react";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

const Status = ({ addedTickets, setAddedTickets }) => {
  return (
    <div className="flex flex-col gap-5">
      <TaskStatus
        addedTickets={addedTickets}
        setAddedTickets={setAddedTickets}
      ></TaskStatus>
      <ResolvedTask></ResolvedTask>
    </div>
  );
};

export default Status;
