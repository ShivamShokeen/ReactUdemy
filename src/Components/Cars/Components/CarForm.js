import React, { Fragment, useState } from "react";
import { addCar, changeCost, changeName } from "../Store";
import { useDispatch, useSelector } from "react-redux";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event) || 0;
    dispatch(changeCost(carCost));
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (name != "" && cost != "") {
      dispatch(addCar({ name, cost }));
      handleNameChange("");
      handleCostChange("");
    }
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-4">
          <label className="form-label">Car Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name || ""}
            onChange={(event) => {
              handleNameChange(event.target.value);
            }}
          ></input>
        </div>
        <div className="col-4">
          <label className="form-label">Car Cost</label>
          <input
            type="number"
            placeholder="Enter Cost"
            value={cost || ""}
            className="form-control"
            onChange={(event) => {
              handleCostChange(event.target.value);
            }}
          ></input>
        </div>
        <div className="col-4 mt-4">
          <button className="btn btn-primary" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CarForm;
