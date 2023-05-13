import { Fragment, React, useContext, useState } from "react";
import BookContext from "../../context/book";

function Book(props) {
  const [bookName, SetBookName] = useState("");

  // const {count,increment} = useContext(BookContext);

  const addBooks = (event) => {
    event.preventDefault();
    if (bookName != "") {
      // props.onClick({id:(Math.trunc(Math.random() * 999)),name : bookName});
      props.onClick({ name: bookName });
    }
  };

  const handleSearch = (event) => {
    if (event.key == "Enter") {
      addBooks(event);
    }
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <form onSubmit={addBooks}>
            <div className="mb-3">
              <label className="form-label">Add Book</label>
              <input
                type="text"
                value={bookName}
                onChange={(e) => SetBookName(e.target.value)}
                placeholder="Enter Book Name"
                className="form-control"
                onKeyDown={handleSearch}
              />
            </div>
            <button
              type="submit"
              disabled={bookName == "" ? true : false}
              className="btn btn-primary"
          
            >
              Add  
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Book;
