import React from "react";
import calenderImg from "../../assets/calendar.png";

const TicketCard = ({ ticket }) => {
  const {
    ticketNumber,
    title,
    description,
    priority,
    status,
    customerName,
    issueDate,
  } = ticket;
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col justify-center gap-4 mt-3 mb-10">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[18px]">{title}</h3>
        <div
          className={`px-4 py-1 ${status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} font-medium rounded-full flex justify-center items-center`}
        >
          {status}
        </div>
      </div>
      <p className="text-[#627382]">{description}</p>
      <div className="flex justify-between">
        <div className="flex gap-6 items-center">
          <p>{ticketNumber}</p>
          <p className="text-[#F83044] font-medium text-sm">{priority}</p>
        </div>
        <div className="flex gap-6 items-center">
          <p>{customerName}</p>
          <p className="flex items-center gap-3">
            <img src={calenderImg} alt="" />
            {issueDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
