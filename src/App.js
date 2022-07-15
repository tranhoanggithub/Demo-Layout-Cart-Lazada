import "./App.css";
import Form from "./Component/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import DeliveryPayment from "./Component/delivery/DeliveryPayment";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Form />} />
          <Route path="/delivery-payment" element={<DeliveryPayment />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
