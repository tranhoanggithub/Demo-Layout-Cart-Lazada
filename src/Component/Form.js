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
    <div class="container">
      <div class="row">
        <Navbar />
      </div>
      <div class="row">
        <div class="col-9">
          <LeftContainer total={total} />
        </div>
        <div class="col-3">
          <RightContainer total={total} callbackTotal={callbackTotal()} />
        </div>
      </div>
    </div>
  );
}
