import React from "react";
import Payment from "./payment/Payment";
import { styled } from "@mui/system";

const FormWrapper = styled("form")({
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
});
const FormButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "30px",
});
export default function DeliveryInformation() {
  return (
    <form>
      <div className="delivery-inf-container">
        <div className="">
          <div className="mt-4">
            <label> Delivery Information</label>
          </div>
          <div className="d-flex">
            <div className="left col-6">
              <div className="form p-3">
                <label for="exampleFormControlInput1">Full name</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                ></input>
              </div>
              <div className="form p-3">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                ></input>
              </div>
            </div>
            <div className="right col-6">
              <div className="">
                <div className="form  p-3">
                  <label for="exampleFormControlInput1">Address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  ></input>
                </div>
                <div className="form  p-3">
                  <label for="exampleFormControlInput1">Province</label>
                  <select class="form-control">
                    <option>Default select</option>
                  </select>
                </div>
              </div>
              <div className="form col p-3 align-self-end">
                <label for="exampleFormControlInput1">District</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                ></input>
              </div>
              <div className="form col p-3 align-self-end">
                <label for="exampleFormControlInput1">Ward</label>
                <select class="form-control">
                  <option>Default select</option>
                </select>
              </div>
              <label className=" m-3" for="exampleFormControlInput1">
                Select a label for effective delivery:
              </label>
              <div className="d-flex">
                <button type="button" class="btn btn-outline-primary  m-2 p-3">
                  OFFICE
                </button>

                <button type="button" class="btn btn-outline-danger m-2 p-3 ">
                  HOME
                </button>
              </div>
              <FormWrapper>
                <FormButtonWrapper>
                  <button
                    type="submit"
                    className=" bg-info border-0 p-2"
                    style={{
                      width: "150px",
                    }}
                  >
                    Save
                  </button>
                </FormButtonWrapper>
              </FormWrapper>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
