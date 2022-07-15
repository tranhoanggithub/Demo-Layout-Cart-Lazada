import React from "react";
import DeliveryInformation from "./DeliveryInformation";
import Payment from "./payment/Payment";
export default function DeliveryPayment() {
  return (
    <div className=" bg-light h-100">
      <div className="d-flex justify-content-md-center ">
        <div className="d-inline m-2 bg-white text-dark col-8 col-lg-4">
          <DeliveryInformation />
        </div>
        <div className="d-inline m-2 bg-white text-dark col-4 col-lg-4">
          <Payment />
        </div>
      </div>
    </div>
  );
}
