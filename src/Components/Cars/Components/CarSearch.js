import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeSearchTerm } from "../Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarSearch = () => {
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(changeSearchTerm(value));
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i
                className="fa fa-sharp fa-light fa-magnifying-glass fa-beat"
                style={{ color: "#5785d6" }}
              ></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search By name and cost"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CarSearch;
