import React, { Fragment, useContext } from "react";
import NavigationContext from "../../context/navigation";

function RouterLink({ to, children }) {
  const { navigationTo } = useContext(NavigationContext);

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigationTo(to);
  };

  return (
    <Fragment>
      <ul className="list-group">
        <li
          className="list-group-item my-2"
          style={{ cursor: "pointer" }}
          aria-disabled="true"
          onClick={handleClick}
        >
          {/* <a href={to} onClick={handleClick}> */}
          {children}
          {/* </a> */}
          {/* {props?.name ? props?.name : "No Name"} */}
        </li>
      </ul>
    </Fragment>
  );
}

export default RouterLink;
