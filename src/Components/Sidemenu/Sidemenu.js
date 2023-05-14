import React, { Fragment } from "react";

const Sidemenu = (props) => {
  return (
    <Fragment>
      <ul className="list-group">
        <li className="list-group-item my-2" style={{cursor:"pointer"}} aria-disabled="true">
          {props?.name ? props?.name : "No Name"}
        </li>
      </ul>
    </Fragment>
  );
};

export default Sidemenu;
