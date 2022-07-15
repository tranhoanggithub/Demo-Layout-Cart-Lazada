import React from "react";
import CardItemLeft from "./CardItemLeft";
import CardItemMiddle from "./CardItemMiddle";
import CardItemRight from "./CardItemRight";

export default function LeftContainer(props) {
  const { total } = props;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="col-8">
            <CardItemLeft />
          </div>
          <div class="col-2">
            <CardItemMiddle />
          </div>
          <div class="col-2">
            <CardItemRight total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}
