import "./App.css";
import { Fragment } from "react";
import Sidemenu from "./Components/Sidemenu/Sidemenu";
import Accordion from "./Components/BT-Components/BT_Accordion";
import BT_Button from "./Components/BT-Components/BT_Button";

function App() {
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

          <div className="col">Body
            <BT_Button></BT_Button>
          </div>

        </div>
      </div>
      <hr style={{ border: "4px dotted black" }}></hr>
    </Fragment>
  );
}

export default App;
