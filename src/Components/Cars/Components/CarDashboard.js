import React, { Fragment } from "react";
import FormSlice from "../Store/Slices/FormSlice";
import CarsSlice from "../Store/Slices/CarsSlice";
import CarValue from "./CarValue";
import CarSearch from "./CarSearch";
import CarList from "./CarList";
import CarForm from "./CarForm";

const CarDashboard = () => {
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <CarSearch></CarSearch>
            <CarForm></CarForm>
            <CarList></CarList>
          </div>
        </div>
      </Fragment>
    );
}

export default CarDashboard;