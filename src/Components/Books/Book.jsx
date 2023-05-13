import { Fragment, React, useContext, useState } from "react";
import BookContext from "../../context/book";

function Book() {
  const [bookName, SetBookName] = useState("");

  const { handleBook } = useContext(BookContext);

  const addBooks = (event) => {
    event.preventDefault();
    if (bookName != "") {
      handleBook({
        name: bookName,
        photographer: "surbhi shokeen",
        src: { original: "https://picsum.photos/id/237/200/300" },
      });
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
