import React from "react";

export default function SelectPage() {
  return (
    <div
      style={{
        marginBottom: "14px",
        backgroundColor: "white",
        height: "40px",
        display: "flex",
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
        <input type="checkbox" style={{ width: "16px", height: "16px" }} />
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
