/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Payment = () => {
  return (
    <form>
      <div className="delivery-inf-container">
        <div className="">
          <div
            className=" m-2 text-center p-2"
            style={{
              color: "white",
              backgroundColor: "rgb(216, 216, 216)",
            }}
          >
            <h4> PROCEED TO PAYMENT</h4>
          </div>
          <div className="d-flex">
            <div className="right col p-2">
              <div className="">
                <div className="form">
                  <div
                    className="d-flex py-2"
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <label for="exampleFormControlInput1">
                      Select Payment Method
                    </label>
                    <a
                      href="#"
                      className="badge-primary"
                      style={{
                        alignItem: "right",
                      }}
                    >
                      View all methods>
                    </a>
                  </div>
                  <div
                    className="border border-info "
                    style={{
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      className="d-flex py-3 px-2"
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "rgb(249, 254, 255)",
                        justifyContent: "space-between",
                      }}
                    >
                      <label>Cash On Delivery</label>
                      <label
                        style={{
                          alignItem: "right",
                          color: "#f57224",
                        }}
                      >
                        Cash On Delivery
                      </label>
                    </div>
                    <label className="py-2 px-2">Pay when you receive</label>
                  </div>
                  <div className="mt-2">
                    <div
                      className="border border-light "
                      style={{
                        borderRadius: "5px",
                      }}
                    >
                      <div
                        className="d-flex py-3 px-2"
                        style={{
                          borderRadius: "5px",
                          borderColor: "rgb(216, 216, 216)",
                          justifyContent: "space-between",
                        }}
                      >
                        <label>Credit/Debit Card</label>
                        <label
                          style={{
                            alignItem: "right",
                            color: "#f57224",
                          }}
                        >
                          Cash On Delivery
                        </label>
                      </div>
                      <label className="py-2 px-2">Tap to add card</label>
                    </div>
                  </div>
                </div>
              </div>

              <label for="exampleFormControlInput1">Voucher</label>
              <div className="d-flex"></div>
              <div
                className="d-flex py-2"
                style={{
                  justifyContent: "space-between",
                }}
              >
                <label for="exampleFormControlInput1">
                  Select Payment Method
                </label>
                <a
                  href="#"
                  className="badge-primary"
                  style={{
                    alignItem: "right",
                  }}
                >
                  edit
                </a>
              </div>
              <div>
                <label for="exampleFormControlInput1">Order Summary</label>
                <div className="d-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Payment;
