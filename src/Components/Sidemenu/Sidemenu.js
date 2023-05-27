import React, { Fragment } from "react";
import RouterLink from "../Link-Handler/RouterLink";

const Sidemenu = (props) => {
  const sideMenuList = [
    {
      name: "Dropdown",
      route: "/dropdown",
    },
    {
      name: "Accordion",
      route: "/accordion",
    },
    {
      name: "Button",
      route: "/button",
    },
    {
      name: "Flex",
      route: "/flex",
    },
    {
      name: "Tables",
      route: "/tables",
    },
    {
      name: "Search",
      route: "/search",
    },
  ];
  const renderSideMenu = sideMenuList.map((v, i) => {
    return (
      <RouterLink key={v.name} to={v.route}>
        {v.name}
      </RouterLink>
    );
  });

  return (
    <Fragment>
      {renderSideMenu}
    </Fragment>
  );
};

export default Sidemenu;
