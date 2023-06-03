import React, { Fragment } from "react";

function BT_Tables(props) {
  let displayColumn = props?.tableDisplayColumns.map((column, i2) => {
    return <th key={i2}>{column}</th>;
  });

  let renderTable = props?.tableList?.map((v, i) => {
    return (
      <tr key={i}>
        <td>{v?.[props?.tableDisplayColumns[0]]}
        {v?.[i]}
        </td>
        <td>{v?.[props?.tableDisplayColumns[1]]}</td>
        <td>{v?.[props?.tableDisplayColumns[2]]}</td>
      </tr>
    );
  });

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>{displayColumn}</tr>
        </thead>
        <tbody>{renderTable}</tbody>
      </table>
    </Fragment>
  );
}

export default BT_Tables;
