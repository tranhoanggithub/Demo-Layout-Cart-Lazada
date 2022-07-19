import React from "react";
import CardItemLeft from "./CardItemLeft";
import CardItemMiddle from "./CardItemMiddle";
import CardItemRight from "./CardItemRight";
import style from "../assets/scss/style.css";
import SelectPage from "./SelectPage";

export default function LeftContainer(props) {
  const chonAll = props.selectAll;
  const checkAll = props.checkAll;
  const toggleCheck = props.toggleCheck;
  const checked = props.checked;
  const total = props.total;
  console.log(
    ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>props trong chonAll la ",
    chonAll
  );
  return (
    <div className="container">
      {" "}
      <SelectPage chonAll={chonAll} checkAll={checkAll} />
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
            <input
              onChange={() => toggleCheck("nr1")}
              checked={checked["nr1"]}
              type="checkbox"
              style={{ width: "16px", height: "16px" }}
            />
          </div>
          <div class="col-7">
            <CardItemLeft toggleCheck={toggleCheck} />
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
