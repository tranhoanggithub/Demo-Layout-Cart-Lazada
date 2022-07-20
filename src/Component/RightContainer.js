import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function RightContainer(props) {
  const { total } = props;
  const DATA = {
    ShippingFee: 19000,
    Subtotal: 1908000,
    Total: 1920000,
  };
  const [responseData, setResponseData] = React.useState([]);
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/1",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    fetchData();
  }, []);

  console.log(">>>>>>>>>>>>>data la", responseData);
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
            {responseData.price}
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
            {/* {DATA.Subtotal} */}
            {/* {responseData.rating.rate} */}
          </div>
        </div>
        <div className="row">
          <div
            className="col-8"
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
            className="col-4"
          >
            {/* {responseData.rating.count} */}
          </div>
        </div>
        <button type="submit" style={{ width: "100%" }} class="btn-submit-cart">
          COMFIRM CART(0)
        </button>
      </div>
    </form>
  );
}
