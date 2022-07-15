import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RightContainer(props) {
  const { total } = props;

  return (
    <form>
      <div className="container RightContainer ">
        <div
          className="row"
          style={{
            color: "#212121",
            textAlign: "left",
            fontSize: "18px",
            padding: "10px 10px",
          }}
        >
          Order Summary
        </div>
        <div className="row">
          <div
            className="col-9"
            style={{
              textAlign: "left",
              color: "#757575",
              padding: "5px",
              fontSize: "14px",
              padding: "10px 10px",
            }}
          >
            Shipping Fee
          </div>
          <div style={{ textAlign: "right" }} className="col-3">
            đ 0
          </div>
        </div>
        <div className="row">
          <div
            className="col-9"
            style={{
              textAlign: "left",
              color: "#757575",
              padding: "10px 10px",
              fontSize: "14px",
            }}
          >
            Subtotal (0 items)
          </div>
          <div style={{ textAlign: "right" }} className="col-3">
            đ 0
          </div>
        </div>
        <div className="row">
          <div
            className="col-9"
            style={{
              textAlign: "left",
              color: "#202020",
              padding: "10px 10px",
              fontSize: "14px",
            }}
          >
            Total
          </div>
          <div
            style={{ textAlign: "right", color: "#f57224" }}
            className="col-3"
          >
            đ 0
          </div>
        </div>
        <button type="submit" style={{ width: "100%" }} class="btn-submit-cart">
          COMFIRM CART(0)
        </button>
      </div>
    </form>
  );
}
