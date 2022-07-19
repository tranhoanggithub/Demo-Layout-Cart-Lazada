import React from "react";
import { useState } from "react";

export default function SelectPage(props) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const selecAllText = () => {
    console.log(">>>>>>>>>>>>>>>>>>>Dax chon input");
  };
  const selectAll = props.chonAll;

  const checkedAll = props.checkAll;
  console.log("XXXXXXXXXXXXXprops ", checkedAll);
  return (
    <div
      style={{
        marginBottom: "14px",
        backgroundColor: "white",
        height: "40px",
        display: "flex",
        padding: "0px 5px",
      }}
    >
      <div
        className="col-1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "20px",
        }}
      >
        <input
          type="checkbox"
          style={{ width: "16px", height: "16px" }}
          onChange={(event) => selectAll(event.target.checked)}
          checked={checkedAll}
        />
      </div>
      <div
        className="col-7"
        style={{
          fontSize: "12px",
          color: "#757575",
          textAlign: "left",
          paddingRight: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        SELECT ALL(1 ITEM(S0)
      </div>
      <div
        className="col-4"
        style={{
          textAlign: "right",
          fontSize: "12px",
          color: "#757575",
          alignItems: "center",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <i
            class="fa fa-trash"
            aria-hidden="true"
            style={{ cursor: "pointer", display: "block" }}
          ></i>
          <div style={{ padding: "0px 5px", cursor: "pointer" }}>DELETE</div>
        </div>
      </div>
    </div>
  );
}
