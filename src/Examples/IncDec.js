import React, { Fragment, useReducer, useState } from "react";

const IncDec = () => {
  const reducer = (state, action) => {
    switch (action?.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };

      case "decrement":
        return {
          ...state,
          count: state.count - 1,
        };

      case "updateCount":
        return {
          ...state,
          count: state.count + state?.valueToAdd,
          valueToAdd: 0,
        };

      case "updateValuetoAdd":
        return {
          ...state,
          valueToAdd: parseInt(action?.value)
        };

      case "updateCount":
        if (parseInt(action.value) > 0) {
          return {
            ...state,
            valueToAdd: parseInt(action?.value),
          };
        } else {
          return {
            ...state,
          };
        }

      case "reset":
        return {
          ...state,
          count: action?.value,
          valueToAdd: 0,
        };
      default:
        return {
          ...state,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 10,
    valueToAdd: 0,
  });

  const handleInc = () => {
    dispatch({ type: "increment", value: 1 });
  };

  const handleDec = () => {
    dispatch({ type: "decrement", value: 1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "updateCount", value: state.valueToAdd });
  };

  const handleReset = () => {
    dispatch({type:'reset',value:10})
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col">Current Count : {state.count}</div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <button className="btn btn-primary" onClick={handleInc}>
            Increment
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-primary" onClick={handleDec}>
            Decrement
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-primary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <span className="text ">Add a lot</span>

          <input
            placeholder="Enter a number"
            type="number"
            value={state.valueToAdd || ""}
            className="form-control mt-2"
            onChange={(e) => {
              dispatch({ type: "updateValuetoAdd", value: e?.target?.value });
            }}
          ></input>
          <br></br>
          <button className="btn btn-success" onClick={handleSubmit}>
            Add it!
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default IncDec;
