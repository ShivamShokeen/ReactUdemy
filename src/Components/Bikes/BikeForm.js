import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBike, setFormCost, setFormName } from "./Store/BikeIndex";

const BikeForm = () => {
    const dispatch = useDispatch();
    
    const { name, cost } = useSelector((state) => {
        return {
                name: state?.bikeForm?.name,
                cost:state?.bikeForm?.cost
            }
        
    })

  const handleSubmit = () => {
      if (name != "" && cost > 0) {
        dispatch(addBike({name,cost}));
    }
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <input
            type="text"
            value={name || ""}
            placeholder="Enter Bike Name"
            className="form-control"
            onChange={(e) => dispatch(setFormName(e.target.value))}
          />
        </div>

        <div className="col">
          <input
            type="text"
            value={cost || ""}
            placeholder="Enter Cost"
            className="form-control"
            onChange={(e) => dispatch(setFormCost(e.target.value))}
          />
        </div>

        <div className="col">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default BikeForm;
