import React from "react";
import { usePopup } from "react-hook-popup";
import PopupDelete from "./PopupDelete";
import style from "../assets/scss/style.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function CardItemMiddle() {
  const [isShow, setShow] = useState(false);
  const [confirm] = usePopup("confirm", ({ message, confirm, cancel }) => (
    <CSSTransition in={isShow} timeout={100000} classNames="my-node">
      <div className="PopupDelete ">
        <div> Remove from cart</div>

        {/* <PopupDelete /> */}
        <div
          style={{ display: "flex", paddingTop: "80px", paddingLeft: "130px" }}
        >
          <div className="button-popup-cancel" onClick={confirm}>
            CONFIRM
          </div>
          <div className="button-popup-remove" onClick={cancel}>
            REMOVE
          </div>
        </div>
      </div>
    </CSSTransition>
  ));
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
        <div style={{ display: "block" }}>
          <i
            style={{ cursor: "pointer", fontSize: "18px", padding: "5px 5px" }}
            class="fa fa-heart"
            aria-hidden="true"
          ></i>
        </div>
        <div onClick={confirm}>
          <i
            style={{ cursor: "pointer", fontSize: "18px", padding: "5px 5px" }}
            class="fa fa-trash"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
}
