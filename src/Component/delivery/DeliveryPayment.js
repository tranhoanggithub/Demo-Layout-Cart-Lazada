import React from "react";
import DeliveryInformation from "./DeliveryInformation";
import Payment from "./payment/Payment";
export default function DeliveryPayment() {
  return (
    <div className=" bg-light h-100">
      <div
        className="d-flex"
        style={{
          paddingLeft: "250px",
          paddingRight: "250px",
        }}
      >
        <div className="d-inline m-2 bg-white text-dark col-8 ">
          <DeliveryInformation />
        </div>
        <div className="d-inline m-2 bg-white text-dark col-4">
          <Payment />
        </div>
      </div>
    </div>
  );
}
