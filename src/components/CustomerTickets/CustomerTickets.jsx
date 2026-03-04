import React from "react";
import calenderImg from "../../assets/calendar.png";

const CustomerTickets = () => {
  return (
    <div className="w-3/4">
      <h3 className="text-[#34485A] font-semibold text-2xl my-5">
        Customer Tickets
      </h3>

      {/* Card */}
      <div className="bg-white p-4 rounded-lg flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-xl">
            Login Issues - Can't Access Account
          </h3>
          <div className="px-4 py-1 bg-[#B9F8CF] font-medium rounded-full flex justify-center items-center">
            Open
          </div>
        </div>
        <p className="text-[#627382]">
          Customer is unable to log in to their account. They've tried resetting
          their password multiple times but still...
        </p>
        <div className="flex justify-between">
          <div className="flex gap-6 items-center">
            <p>#1001</p>
            <p className="text-[#F83044] font-medium text-sm">High Priority</p>
          </div>
          <div className="flex gap-6 items-center">
            <p>John Smith</p>
            <p className="flex items-center gap-3">
              <img src={calenderImg} alt="" />
              15/01/2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
