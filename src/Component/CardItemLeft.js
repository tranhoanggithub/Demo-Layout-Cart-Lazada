import React from "react";
// import aokhoacnu from "../assets/auth/image/aokhoacnu.jpg";

export default function CardItemLeft() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-4">
          <img src={require("../assets/auth/image/aokhoacnu.jpg")} />
        </div>
        <div class="col-8">
          ÁO KHOÁC JEAN NAM NỮ CAO CẤP THỜI TRANG SHYNFASHION M2011
        </div>
      </div>
    </div>
  );
}
