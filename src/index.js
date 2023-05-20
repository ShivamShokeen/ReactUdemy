import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./context/book";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dropdown from './Components/BT-Components/BT_Dropdown';
import Accordion from "./Components/BT-Components/BT_Accordion";
import Button from "./Components/BT-Components/BT_Button";
import Flex from "./Components/BT-Components/BT_Flex";
import Tables from "./Components/BT-Components/BT_Tables";
import Search from "./Components/BT-Components/BT_Search";
import NotFound from "./Components/NotFound"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
      {/* <Router>
        <Routes>
          <Route exact path="/" component={Dropdown} />
          <Route exact path="/Dropdown" component={Dropdown} />
          <Route path="/Accordion" component={Accordion} />
          <Route path="/Button" component={Button} />
          <Route path="/Flex" component={Flex} />
          <Route path="/Tables" component={Tables} />
          <Route path="/Search" component={Search} />
          <Route component={NotFound} />
        </Routes>
      </Router> */}
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
