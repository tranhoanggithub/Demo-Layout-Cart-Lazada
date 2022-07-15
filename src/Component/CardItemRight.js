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
    <div>
      <button onClick={() => DownProduct()} type="button" class="btn btn-info">
        -
      </button>
      1
      <button onClick={() => UpProduct()} type="button" class="btn btn-warning">
        +
      </button>
    </div>
  );
}
