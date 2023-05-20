import "./App.css";
import { Fragment } from "react";
import DashboardPG from "./Pages/DashboardPG";
import BT_Accordion from "./Components/BT-Components/BT_Accordion";

function App() {

  let accordionList = [
    {
      id:1,
      heading: "Accordion 1",
      content: "First Accordion",
    },
    {
      id:2,
      heading: "Accordion 2",
      content: "Second Accordion",
    },
    {
      id:3,
      heading: "Accordion 3",
      content: "Third Accordion",
    },
    {
      id:4,
      heading: "Accordion 4",
      content: "Forth Accordion",
    },
  ]; 
  return (
    <Fragment>
      <DashboardPG></DashboardPG>
      <BT_Accordion accordionList={accordionList}></BT_Accordion>
      <div className="accordion" id="accordionExample" hidden>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">1
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
