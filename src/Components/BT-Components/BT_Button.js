import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function BT_Button({ children, data }) {
  return (
    <Fragment>
      <button type="button" className="btn btn-primary mx-2">
        {children}&nbsp;
        <FontAwesomeIcon icon={faCoffee} size="xs" />
      </button>
      <button type="button" className="btn btn-secondary mx-2">
        {children}
      </button>
      <button type="button" className="btn btn-success mx-2">
        {children}
      </button>
      <button type="button" className="btn btn-danger mx-2">
        {children}
      </button>
      <button type="button" className="btn btn-warning mx-2">
        {children}
      </button>
      <button type="button" className="btn btn-info mx-2">
        {children}
      </button>
      <button type="button" className="btn btn-light mx-2">
        {children}
      </button>
      <button type="button" className="btn btn-dark mx-2">
        {children}
      </button>
      <button type="button" className="btn btn-link mx-2">
        {children}
      </button>
    </Fragment>
  );
}

BT_Button.propTypes = {};

export default BT_Button;
