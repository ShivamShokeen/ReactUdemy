import "./App.css";
import { Fragment } from "react";
import DashboardPG from "./Pages/DashboardPG";
import BT_Accordion from "./Components/BT-Components/BT_Accordion";
import BT_Dropdown from "./Components/BT-Components/BT_Dropdown";
import RouteCustom from "./Components/Link-Handler/Route";
import BT_Flex from "./Components/BT-Components/BT_Flex";
import BT_Tables from "./Components/BT-Components/BT_Tables";
import BT_Search from "./Components/BT-Components/BT_Search";
import BT_Button from "./Components/BT-Components/BT_Button";
import BT_Modal from "./Components/BT-Components/BT_Modal";
import IncDec from "./Examples/IncDec";
import MovieSong from "./Components/MovieSong/MovieSong";
import CarDashboard from "./Components/Cars/Components/CarDashboard";
import GalleryDashboard from "./Components/Gallery/Components/GalleryDashboard";

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

  let tableDisplayColumns = [
    'id','name','last'
  ]
  let tableList = [
    {
      id: 1,
      last: "Shokeen",
      name: "Shivam",
    },
    {
      name: "Surbhi",
      last: "Shokeen",
      id: 2,
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
        <div className="row">
          <div className="col-2">
            <DashboardPG></DashboardPG>
          </div>

          <div className="col-10">
            <RouteCustom path="/accordion">
              <BT_Accordion accordionList={accordionList}></BT_Accordion>
            </RouteCustom>
            <RouteCustom path="/dropdown">
              <BT_Dropdown dropdownList={dropdownList}></BT_Dropdown>
            </RouteCustom>
            <RouteCustom path="/flex">
              <BT_Flex></BT_Flex>
            </RouteCustom>

            <RouteCustom path="/button">
              <BT_Button>Test</BT_Button>
            </RouteCustom>

            <RouteCustom path="/tables">
              <BT_Tables
                tableList={tableList}
                tableDisplayColumns={tableDisplayColumns}
              ></BT_Tables>
            </RouteCustom>

            <RouteCustom path="/search">
              <BT_Search></BT_Search>
            </RouteCustom>

            <RouteCustom path="/modal">
              <BT_Modal></BT_Modal>
            </RouteCustom>

            <RouteCustom path="/modal">
              <BT_Modal></BT_Modal>
            </RouteCustom>

            <RouteCustom path="/incdec">
              <IncDec></IncDec>
            </RouteCustom>

            <RouteCustom path="/moviesong">
              <MovieSong></MovieSong>
            </RouteCustom>

            <RouteCustom path="/carpage">
              <CarDashboard></CarDashboard>
            </RouteCustom>

            <RouteCustom path="/gallery-dashboard">
              <GalleryDashboard></GalleryDashboard>
            </RouteCustom>

            <RouteCustom path="/">
              <BT_Dropdown dropdownList={dropdownList}></BT_Dropdown>
            </RouteCustom>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
