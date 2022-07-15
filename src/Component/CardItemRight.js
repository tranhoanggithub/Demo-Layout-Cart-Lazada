import React from "react";
import { useState } from "react";

export default function CardItemRight(props) {
  const [total, setTotal] = useState(Number(props.total));
  console.log(">>>>>>>>>>.total là trong tinh tien", Number(total));
  const UpProduct = () => {
    setTotal(total + 1);
    console.log(total);
  };
  const DownProduct = () => {
    setTotal(total - 1);
    console.log(total);
  };
  return (
    <div className="CardItemRight">
      <button
        onClick={() => DownProduct()}
        type="button"
        class="button-dow-item-right"
      >
        -
      </button>
      <div style={{ padding: "10px 15px" }}>1</div>
      <button
        onClick={() => UpProduct()}
        type="button"
        class="button-up-item-right"
      >
        +
      </button>
    </div>
  );
}
