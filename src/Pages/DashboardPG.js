import React, { Fragment } from "react";
import Sidemenu from "../Components/Sidemenu/Sidemenu";

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
    </Fragment>
  );
}

export default DashboardPG;
