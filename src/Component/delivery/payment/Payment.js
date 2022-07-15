import React from "react";

const Payment = () => {
  return (
    <form>
      <div className="delivery-inf-container">
        <div className="">
          <div className=" bg-light m-2 text-center p-2">
            <h4> PROCEED TO PAYMENT</h4>
          </div>
          <div className="d-flex">
            <div className="right col">
              <div className="">
                <div className="form  p-4">
                  <label for="exampleFormControlInput1">
                    Select Payment Method
                  </label>
                  <div className="border border-info">
                    <div className="bg-info">
                      <label>Cash On Delivery</label>
                    </div>
                    <label>Pay when you receive</label>
                  </div>
                </div>
                <div className="form  p-4">
                  <label for="exampleFormControlInput1">Province</label>
                  <select class="form-control">
                    <option>Default select</option>
                  </select>
                </div>
              </div>
              <div className="form col p-4 align-self-end">
                <label for="exampleFormControlInput1">District</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                ></input>
              </div>
              <div className="form col p-4 align-self-end">
                <label for="exampleFormControlInput1">Ward</label>
                <select class="form-control">
                  <option>Default select</option>
                </select>
              </div>
              <label for="exampleFormControlInput1">
                Select a label for effective delivery:
              </label>
              <div className="d-flex">
                <button type="button" class="btn btn-outline-primary m-4 p-3">
                  OFFICE
                </button>

                <button type="button" class="btn btn-outline-danger m-4 p-3">
                  Home
                </button>
              </div>
              <button type="button" className="btn btn-rg btn-info" disabled>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Payment;
