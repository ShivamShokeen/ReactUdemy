import React, { Fragment, useState } from "react";

const Cards = (props) => {
  const [imgHeight, setHeight] = useState(36);

  const handleClick = () => {
    setHeight(imgHeight * 2);
    console.log("handleTriggred", imgHeight);
  };

  const renderCard = props.dataList.map((v, i) => {
    return (
      <Fragment key={v.id}>
        <div className="card">
          <img src={v?.src?.original} className="card-img-top" alt="Image" />

          <div className="card-body" onClick={handleClick}>
            <h5 className="card-title">
              {props?.name ? props?.name : "Sample Title"}
            </h5>
            <p className="card-text">
              {props?.alt ? props?.alt : "Sample Content"}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <img
              style={{ width: "56px" }}
              height={imgHeight}
              src={props?.footerImage}
              className="card-img"
              alt="Image"
            />
          </div>
        </div>
      </Fragment>
    );
  });

  return <Fragment>{renderCard}</Fragment>;
};

export default Cards;
