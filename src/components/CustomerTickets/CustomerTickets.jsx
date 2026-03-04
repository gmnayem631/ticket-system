import React from "react";

const CustomerTickets = () => {
  return (
    <div className="w-3/4">
      <h3 className="text-[#34485A] font-semibold text-2xl">
        Customer Tickets
      </h3>

      <div className="">
        <div className="flex items-center justify-between">
          <h3>Login Issues - Can't Access Account</h3>
          <div className="px-4 py-1 bg-[#B9F8CF] font-medium rounded-full flex justify-center items-center">
            Open
          </div>
        </div>
        <p>
          Customer is unable to log in to their account. They've tried resetting
          their password multiple times but still...
        </p>
        <div className="flex">
          <div className="">
            <p>#1001</p>
            <p>High Priority</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
