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
          className={
            to == window.location.pathname
              ? "list-group-item my-2 active"
              : "list-group-item my-2"
          }
          style={{ cursor: "pointer" }}
          aria-disabled="true"
          onClick={handleClick}
          title={children}
        >
          {children}
        </li>
      </ul>
    </Fragment>
  );
}

export default RouterLink;
