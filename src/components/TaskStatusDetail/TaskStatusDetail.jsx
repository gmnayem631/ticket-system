import React from "react";

const TaskStatusDetail = ({ oneAddedTicket }) => {
  const { title } = oneAddedTicket;
  return (
    <div
      key={oneAddedTicket.id}
      className="flex flex-col justify-center items-center p-3 rounded-lg w-full gap-4 bg-white"
    >
      <p className="font-medium text-[18px] text-[#001931]">{title}</p>
      <button className="btn w-full bg-[#02A53B] font-semibold text-white">
        Complete
      </button>
    </div>
  );
};

export default TaskStatusDetail;
