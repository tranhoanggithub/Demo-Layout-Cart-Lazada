import React from "react";

export default function CardItemMiddle() {
  return (
    <div className="container">
      <div className="row">
        <p style={{ color: "red", textAlign: "left", height: "20px" }}>
          đ 199.000
        </p>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div>
          <i
            style={{ cursor: "pointer", fontSize: "18px", padding: "5px 5px" }}
            class="fa fa-heart"
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <i18
            style={{ cursor: "pointer", fontSize: "18px", padding: "5px 5px" }}
            class="fa fa-trash"
            aria-hidden="true"
          ></i18>
        </div>
      </div>
    </div>
  );
}
