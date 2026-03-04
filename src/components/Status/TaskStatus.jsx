import React from "react";
import TaskStatusDetail from "../TaskStatusDetail/TaskStatusDetail";

const TaskStatus = ({ addedTickets }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <h4 className="text-[#34485A] font-semibold text-2xl">Task Status</h4>
        {addedTickets.length === 0 ? (
          <p className="text-[#627382]">
            Select a ticket to add to Task Status
          </p>
        ) : (
          addedTickets.map((oneAddedTicket) => {
            return (
              <TaskStatusDetail
                key={oneAddedTicket.id}
                oneAddedTicket={oneAddedTicket}
              ></TaskStatusDetail>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
