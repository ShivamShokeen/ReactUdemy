import { Fragment, React, useState } from "react";
import useBookContext from "../../hooks/use-bookContext";

function BookCard(props) {
  const [editText, setEditText] = useState("");
  const [editInputCheck, setInputCheck] = useState(false);

  const { handleBookEdit, handleBookDelete } = useBookContext();

  const handleEdit = () => {
    setInputCheck(true);
    setEditText(props?.name);
  };

  const handleDelete = () => {
    handleBookDelete(props?.id);
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      handleBookEdit({ name: editText }, props?.id);
      setInputCheck(false);
    }
  };

  return (
    <Fragment>
      <div className="card" style={{ width: "18rem", margin: "0 10px 0 0" }}>
        <div className="card-body">
          <h5 className="card-name">
            {props.name ? props.name : "Sample name"}

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
            <span className="text-success">Photographer: </span>
            {editInputCheck == false ? (
              props.content ? (
                props.content
              ) : (
                "Sample name"
              )
            ) : (
              <Fragment>
                <span>{props.content ? props.content : "Sample name"}</span>

                <input
                  value={editText}
                  className="form-control mb-2"
                  onChange={(e) => {
                    setEditText(e.target.value);
                  }}
                  placeholder="Modify Name"
                  onKeyDown={handleKeyDown}
                ></input>
              </Fragment>
            )}

            <img src={props.image} className="card-img-top" alt="Card Image" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BookCard;
