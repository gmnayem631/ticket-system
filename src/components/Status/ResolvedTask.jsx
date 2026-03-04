import React from "react";

const ResolvedTask = ({ resolvedTickets }) => {
  console.log(resolvedTickets);
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <h4 className="text-[#34485A] font-semibold text-2xl">Resolved Task</h4>
        {resolvedTickets.length === 0 ? (
          <p className="text-[#627382]">No resolved tasks yet</p>
        ) : (
          resolvedTickets.map((ticket) => (
            <div key={ticket.id} className="bg-[#E0E7FF] p-3 rounded-lg">
              {ticket.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResolvedTask;
