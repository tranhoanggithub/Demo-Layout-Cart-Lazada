import React from "react";
import LeftContainer from "./LeftContainer";
import Navbar from "./Navbar";
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
        <Navbar />
      </div>
      <div class="row">
        <div class="col-7" style={{ marginTop: "30px" }}>
          <LeftContainer total={total} />
        </div>
        <div class="col-2" style={{ marginTop: "30px" }}>
          <RightContainer total={total} callbackTotal={callbackTotal()} />
        </div>
      </div>
    </div>
  );
}
