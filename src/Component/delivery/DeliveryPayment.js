import React from "react";
import DeliveryInformation from "./DeliveryInformation";
import Payment from "./payment/Payment";
export default function DeliveryPayment() {
  return (
    <div className=" bg-light h-100">
      <div
        className="d-flex container"
        style={{
          paddingLeft: "250px",
          paddingRight: "2  50px",
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
