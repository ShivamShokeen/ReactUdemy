import React, { Fragment, useState } from "react";

function BT_Dropdown(props) {
  let renderElement = [];
  let renderSelectElement = "";
  const [selectedOption, setSelectedOption] = useState("");

  if (props?.dropdownList?.length > 0) {
    renderElement = props.dropdownList.map((v) => {
      let optionRender = v?.option.map((o) => {
        return (
          <Fragment>
            <option key={o.value + 1} value={o.value}>{o?.name}</option>
          </Fragment>
        );
      });
      return (
        <Fragment>
          <label className="form-label mb-2" key={v?.id + 1}>
            {v?.label}
          </label>
          <select
            key={v?.id + 2}
            className="form-select mb-2"
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            <option selected disabled>{v.placeholder}</option>
            {optionRender}
          </select>
        </Fragment>
      );
    });

  } else {
    renderElement = (
      <div className="d-flex justify-content-center">No data found!</div>
    );
  }

  if (selectedOption !== "") {
    renderSelectElement = <div>{selectedOption}</div>;
  } else {
    renderSelectElement = <div>Please select a value from Dropdown</div>;
  }

  return (
    <Fragment>
      <div>{renderSelectElement}</div>
      <div>{renderElement}</div>
    </Fragment>
  );
}

export default BT_Dropdown;
