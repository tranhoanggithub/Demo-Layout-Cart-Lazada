import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RightContainer(props) {
  const { total } = props;

  return (
    <form>
      <div className="container">
        <div className="row">
          <p
            style={{
              color: "red",
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            THÔNG TIN ĐƠN HÀNG
          </p>
        </div>
        <div className="row">
          <div className="col-8" style={{ textAlign: "left" }}>
            Tổng cộng
          </div>
          <div
            className="col-4"
            style={{ textAlign: "right", fontSize: "30px", color: "red" }}
          >
            <p>{total} đồng</p>
          </div>
        </div>
      </div>
      <button type="submit" style={{ width: "100%" }} class="btn btn-danger">
        Xác nhận giỏ hàng
      </button>
    </form>
  );
}
