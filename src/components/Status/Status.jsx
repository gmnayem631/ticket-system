import React from "react";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

const Status = ({
  addedTickets,
  setAddedTickets,
  resolvedTickets,
  setResolvedTickets,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <TaskStatus
        addedTickets={addedTickets}
        setAddedTickets={setAddedTickets}
        resolvedTickets={resolvedTickets}
        setResolvedTickets={setResolvedTickets}
      ></TaskStatus>
      <ResolvedTask
        resolvedTickets={resolvedTickets}
        setResolvedTickets={setResolvedTickets}
      ></ResolvedTask>
    </div>
  );
};

export default Status;
