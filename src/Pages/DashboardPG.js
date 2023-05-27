import React, { Fragment } from "react";
import Sidemenu from "../Components/Sidemenu/Sidemenu";
import BT_Button from "../Components/BT-Components/BT_Button";

function DashboardPG() {


  return (
    <Fragment>
      <div>
        <div className="row">
          <div className="col">
            <Sidemenu></Sidemenu>
          </div>
        </div>
      </div>
      {/* <hr style={{ border: "4px dotted black" }}></hr> */}
    </Fragment>
  );
}

export default DashboardPG;
