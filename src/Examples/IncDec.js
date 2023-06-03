import React, { Fragment, useReducer, useState } from "react";

const IncDec = () => {

  const reducer = (state, action) => {
    if (
      action == "increment" ||
      action == "decrement" ||
      action == "updateCount"
    ) {
      if (action == "increment") {
        return {
          ...state,
          count: state.count + 1,
        };
      }

      if (action == "decrement") {
        return {
          ...state,
          count: state.count - 1,
        };
      }
      if (action == "updateCount") {
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd : 0
        };
      }
    } else {
      if (parseInt(action) > 0) {
        return {
          ...state,
          valueToAdd: parseInt(action),
        };
      } else {
        return {
          ...state,
        };
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 10,
    valueToAdd: 0,
  });

  const handleInc = () => {
    dispatch("increment");
  };

  const handleDec = () => {
    dispatch("decrement");
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
     dispatch("updateCount");
  };

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
              dispatch(e?.target?.value)
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
