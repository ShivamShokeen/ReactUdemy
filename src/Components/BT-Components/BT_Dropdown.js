import React, { Fragment, useEffect, useState, useRef } from "react";

function BT_Dropdown(props) {
  let renderElement = [];
  let renderSelectElement = "";
  const [selectedOption, setSelectedOption] = useState("");

  // To deteact click from div

  let selectDiv = useRef();
  // www.udemy.com/course/react-redux/learn/lecture/34695438#reviews

  // https://www.udemy.com/course/react-redux/learn/lecture/34695444#reviews

  useEffect(() => {
    const handleClick = (event) => {
      console.log("Clicked", selectDiv.current);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // To deteact click from div

  if (props?.dropdownList?.length > 0) {
    renderElement = props.dropdownList.map((v) => {
      let optionRender = v?.option.map((o) => {
        return (
          <Fragment key={o.value + 1}>
            <option value={o.value}>{o?.name}</option>
          </Fragment>
        );
      });
      return (
        <Fragment key={v?.id + 1}>
          <label className="form-label mb-2">{v?.label}</label>
          <select
            className="form-select mb-2"
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            <option defaultValue disabled>
              {v.placeholder}
            </option>
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
      <div ref={selectDiv} className="selects">
        {renderElement}
      </div>
    </Fragment>
  );
}

export default BT_Dropdown;
