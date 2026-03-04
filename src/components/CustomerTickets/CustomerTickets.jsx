import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const CustomerTickets = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);

  return (
    <div className="w-3/4">
      <h3 className="text-[#34485A] font-semibold text-2xl my-5">
        Customer Tickets
      </h3>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {ticketsData.map((ticket) => {
          return <TicketCard key={ticket.id} ticket={ticket}></TicketCard>;
        })}
      </div>
    </div>
  );
};

export default CustomerTickets;
