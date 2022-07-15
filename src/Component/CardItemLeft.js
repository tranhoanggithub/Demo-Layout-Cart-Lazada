import React from "react";
// import aokhoacnu from "../assets/auth/image/aokhoacnu.jpg";

export default function CardItemLeft() {
  return (
    <div className="container" class="CardItemLeft">
      <div class="row">
        <div
          class="col-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: "80px" }}
            src={require("../assets/auth/image/aokhoacnu.jpg")}
          />
        </div>
        <div class="col-10">
          <p style={{ width: "328px", height: "32px", fontSize: "14px" }}>
            ÁO KHOÁC JEAN NAM NỮ CAO CẤP THỜI TRANG SHYNFASHION M2011
          </p>
          <p style={{ width: "328px", height: "16px", fontSize: "12px" }}>
            OEM Color Family:XANH NHẠT, Size;Int
          </p>
        </div>
      </div>
    </div>
  );
}
