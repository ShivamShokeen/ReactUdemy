import React, { Fragment, useState } from "react";

function BT_Accordion(props) {
  let renderAccordion = [];
  let [accState, setAccState] = useState(0);
  let [accColl, setAccColl] = useState(false);

  if (props.accordionList?.length > 0) {
    renderAccordion = props.accordionList.map((v) => {
      return (
        <div
          className="accordion"
          onClick={(e) => {
            setAccState(v?.id);
            setAccColl(accColl ? false : true);
          }}
          key={v?.id}
          id={"accordionExampleO" + 1}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id={"#headingO" + v?.id}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"collapseO" + v?.id}
                aria-expanded={accState == v?.id && accColl ? true : false}
                aria-controls={"#collapseO" + v?.id}
              >
                {v?.heading ? v.heading : "Sample Accordion"}
              </button>
            </h2>
            <div
              id={"#collapseO" + v?.id}
              className={
                accState == v?.id && accColl
                  ? "accordion-collapse collapse show"
                  : "accordion-collapse collapse hide"
              }
              aria-labelledby={"#headingO" + v?.id}
              data-bs-parent={"#accordionExampleO" + 1}
            >
              <div className="accordion-body">
                {v?.content ? v?.content : "Sample Content"}
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    renderAccordion = <span className="d-flex justify-content-center">No data found!</span>
  }
  return <Fragment>{renderAccordion}</Fragment>;
}

export default BT_Accordion;
