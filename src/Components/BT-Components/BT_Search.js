import React, { Fragment } from "react";

function BT_Search() {
  return (
    <Fragment>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </Fragment>
  );
}

export default BT_Search;
