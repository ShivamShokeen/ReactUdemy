import React, { Fragment } from "react";

function BT_Dropdown(props) {
  
  let renderElement = [];

  if (props?.dropdownList?.length > 0) {
    renderElement = props.dropdownList.map((v) => {
      
      let optionRender = v?.option.map((o) => {
        return (
          <Fragment>
            <option value={o.value}>{ o?.name }</option>
          </Fragment>
        )
      })
      return (
        <Fragment>
          <label className="form-label mb-2">{v?.label}</label>
          <select class="form-select mb-2">
            <option selected>{v.placeholder}</option>
            {optionRender}

            {/* <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option> */}
          </select>
        </Fragment>
      );
    });
  } else {
    renderElement = (
      <div className="d-flex justify-content-center">No data found!</div>
    );
  }
  
  return (
    <Fragment>
      {renderElement}
    </Fragment>
  );
}

export default BT_Dropdown;
