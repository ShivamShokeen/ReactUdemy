import { Fragment } from "react";
import BikeSearch from "./BikeSearch";
import BikeForm from "./BikeForm";
import BikeList from "./BikeList";

const BikeDashboard = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <BikeSearch></BikeSearch>
        </div>

        <div className="col-12 mt-4">
          <BikeForm></BikeForm>
        </div>

        <div className="col-12 mt-4">
          <BikeList></BikeList>
        </div>
      </div>
    </Fragment>
  );
};

export default BikeDashboard;
