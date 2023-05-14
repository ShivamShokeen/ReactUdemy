import React, { Fragment } from "react";

function Flex() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Flex;
