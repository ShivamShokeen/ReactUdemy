import React, { Fragment, useState } from "react";

function Searchbar(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    if (event.key == "Enter") {
      props?.onSubmit(searchInput);
    }
  };

  return (
    <Fragment>
      <div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="addon-wrapping"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
            
            <div className="mt-3">
              <span className="text-danger">
                {searchInput.length == 0 ? "Search can't be empty" : ""}
              </span>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Searchbar;
