import "./App.css";
import { Fragment } from "react";
import DashboardPG from "./Pages/DashboardPG";
import BT_Accordion from "./Components/BT-Components/BT_Accordion";
import BT_Dropdown from "./Components/BT-Components/BT_Dropdown";

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


    let dropdownList = [
      {
        id: 1,
        label: "Book",
        placeholder: "Select a Book",
        option: [
          {
            name: "Book 1",
            value: 10,
          },
          {
            name: "Book 2",
            value: 11,
          },
        ],
      },
      {
        id: 2,
        label: "Game",
        placeholder: "Select a Game",
        option: [
          {
            name: "GTA",
            value: 12,
          },
          {
            name: "Evil Dead",
            value: 13,
          },
        ],
      },
      {
        id: 3,
        label: "Animal",
        placeholder: "Select a Animal",
        option: [
          {
            name: "Tiger",
            value: 14,
          },
          {
            name: "Bear",
            value: 15,
          },
        ],
      },
    ]; 

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        {/* <DashboardPG></DashboardPG> */}
        {/* <BT_Accordion accordionList={accordionList}></BT_Accordion> */}
        <BT_Dropdown dropdownList={dropdownList}></BT_Dropdown>
      </div>
    </Fragment>
  );
}

export default App;
