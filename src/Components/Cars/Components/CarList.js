import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../Store";

const CarList = () => {
  const dispatch = useDispatch();

  const carRender = useSelector(({ cars: { data, searchTerm } }) => {
    let dataFilter = data.filter((car) =>
      car?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    return searchTerm == "" ? data : dataFilter?.length == 0 ? [] : dataFilter;
  });

  const handleDelete = (event) => {
    dispatch(deleteCar(event));
  };

  const renderElement = carRender.map((v, i) => {
    return (
      <Fragment key={i}>
        <div className="row">
          <div className="col">
            <ul className="list-group mt-4">
              <li className="list-group-item">Id: {v?.id}</li>
              <li className="list-group-item">Name: {v?.name}</li>
              <li className="list-group-item">Cost: {v?.cost} </li>
              <li className="list-group-item">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(v?.id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          {carRender?.length == 0 ? "No record found!" : renderElement}
        </div>
      </div>
    </Fragment>
  );
};

export default CarList;
