import { Fragment, React, useContext, useState } from "react";
import BookContext from "../../context/book";

function BookCard(props) {
  const [editText, setEditText] = useState("");
  const [editInputCheck, setInputCheck] = useState(false);

  // let editInputCheck = false;

  const handleEdit = () => {
    setInputCheck(true);
    setEditText(props?.title);
  };

  const handleDelete = () => {
    props.handleDelete(props?.id);
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      setEditText(props?.title);
      props.onEdit({ id: props?.id, name: editText });
      setInputCheck(false);
    }
  };

  return (
    <Fragment>
      <div className="card" style={{ width: "18rem", margin: "0 10px 0 0" }}>
        <div className="card-body">
          <h5 className="card-title">
            {props.title ? props.title : "Sample title"}
            <div style={{ float: "right", display: "inline-block" }}>
              <i
                style={{ cursor: "pointer" }}
                onClick={handleEdit}
                className=" fa-regular fa-pen-to-square text-success"
              ></i>
              &nbsp;
              <i
                style={{ cursor: "pointer" }}
                onClick={handleDelete}
                className="fa fa-regular fa-trash text-danger"
              ></i>
            </div>
          </h5>

          <div className="card-text">
            {editInputCheck == false ? (
              props.content ? (
                props.content
              ) : (
                "Sample title"
              )
            ) : (
              <input
                value={editText}
                className="form-control mb-2"
                onChange={(e) => {
                  setEditText(e.target.value);
                }}
                placeholder="Modify Name"
                onKeyDown={handleKeyDown}
              ></input>
            )}

            <img src={props.image} className="card-img-top" alt="Card Image" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BookCard;
