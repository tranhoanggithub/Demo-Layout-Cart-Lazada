import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { useState } from "react";

export default function Form() {
  const [total, setTotal] = useState("150000");
  console.log(">>>>>>>>>>>>>>>>>>total trong form là", total);
  const callbackTotal = (totalchange) => {
    console.log(">>>>>total truyền đến form là", totalchange);
  };
  return (
    <div
      class="container"
      style={{ width: "100%", backgroundColor: "#F4F4F4" }}
    >
      <div class="row">
        <div class="col-9" style={{ paddingTop: "30px" }}>
          <LeftContainer total={total} />
        </div>
        <div class="col-3" style={{ marginTop: "30px" }}>
          <RightContainer total={total} callbackTotal={callbackTotal()} />
        </div>
      </div>
    </div>
  );
}
