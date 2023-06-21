import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBike } from "./Store/BikeIndex";

const BikeList = () => {
  const dispatch = useDispatch();

  const bikeState = useSelector((state) => {
    return state?.bikes?.bikeList;
  });

  const handleDelete = (e) => {
    dispatch(deleteBike(e));
  };

  const bikeRender = bikeState.map((v, i) => {
    return (
      <Fragment key={i}>
        <ul className="list-group">
          <li className="list-group-item">Bike Name : {v?.name}</li>
          <li className="list-group-item">Bike Cost : {v?.cost}</li>
          <li className="list-group-item">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(v?.id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          {bikeRender.length == 0 ? "No record found!" : bikeRender}
        </div>
      </div>
    </Fragment>
  );
};

export default BikeList;
