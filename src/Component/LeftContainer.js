import React from "react";
import CardItemLeft from "./CardItemLeft";
import CardItemMiddle from "./CardItemMiddle";
import CardItemRight from "./CardItemRight";
import style from "../assets/scss/style.css";
import SelectPage from "./SelectPage";

export default function LeftContainer(props) {
  const { total } = props;
  return (
    <div>
      {" "}
      <SelectPage />
      <div className="container LeftContainer">
        <div className="row">
          <div
            class="col-1"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <input type="checkbox" style={{ width: "16px", height: "16px" }} />
          </div>
          <div class="col-7">
            <CardItemLeft />
          </div>
          <div class="col-2">
            <CardItemMiddle />
          </div>
          <div class="col-2">
            <CardItemRight total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}
