import React, { Fragment } from "react";
import Sidemenu from "../Components/Sidemenu/Sidemenu";
import BT_Button from "../Components/BT-Components/BT_Button";

function DashboardPG() {
  const sideMenuList = [
    "Dropdown",
    "Accordion",
    "Button",
    "Flex",
    "Tables",
    "Search",
  ];
  const renderSideMenu = sideMenuList.map((v, i) => {
    return <Sidemenu name={v} key={i}></Sidemenu>;
  });

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">{renderSideMenu}</div>

          <div className="col mt-2">
            <BT_Button data={{ key: "name" }}>Test</BT_Button>
          </div>
        </div>
      </div>
      <hr style={{ border: "4px dotted black" }}></hr>
    </Fragment>
  );
}

export default DashboardPG;
