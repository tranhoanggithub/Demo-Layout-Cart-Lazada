import React from "react";

export default function CardItemMiddle() {
  return (
    <div className="container">
      <div className="row">
        <p style={{ color: "red" }}>199.000đ</p>
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "inherit",
          alignContent: "center",
        }}
      >
        <div className="col-6">
          <i
            style={{ cursor: "pointer", fontSize: "20px" }}
            class="fa fa-heart"
            aria-hidden="true"
          ></i>
        </div>
        <div className="col-6">
          <i
            style={{ cursor: "pointer", fontSize: "20px" }}
            class="fa fa-trash"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
}
