import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { useEffect } from "react";
import { useState } from "react";

export default function Form() {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    nr1: false,
    nr2: false,
  });

  /* ################################################ */
  /* #### TOGGLES checK STATE BASED ON inputName #### */
  /* ################################################ */

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  /* ###################################################### */
  /* #### CHECKS OR UNCHECKS ALL FROM SELECT ALL CLICK #### */
  /* ###################################################### */

  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  /* ############################################# */
  /* #### EFFECT TO CONTROL CHECKED_ALL STATE #### */
  /* ############################################# */

  // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE
  // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);
  const [total, setTotal] = useState("1");
  console.log(">>>>>>>>>>>>>>>>>>total trong form là", total);
  const callbackTotal = (totalchange) => {
    console.log(">>>>>total truyền đến form là", totalchange);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  ];
  return (
    <div
      class="container"
      style={{ width: "100%", backgroundColor: "#F4F4F4" }}
    >
      <div className="row">
        <div class="col-9" style={{ paddingTop: "30px" }}>
          <LeftContainer
            selectAll={selectAll}
            checkedAll={checkedAll}
            toggleCheck={toggleCheck}
            total={total}
            checked={checked}
          />
        </div>
        <div class="col-3" style={{ marginTop: "30px" }}>
          <RightContainer total={total} callbackTotal={callbackTotal()} />
        </div>
      </div>
      <div className="row">
        <div style={{ height: 400, width: "100%" }}>
          {rows.map((rows) => (
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
}
