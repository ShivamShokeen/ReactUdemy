import "./App.css";
import { Fragment, useEffect } from "react";
import Book from "./Components/Books/Book";
import BookCard from "./Components/Books/BookCard";
import useBookContext from "./hooks/use-bookContext";

function App() {
  const { apiRequest, bookList } = useBookContext();

  let renderBooks = bookList.map((v, i) => {
    return (
      <Fragment key={i}>
        <BookCard
          className="mt-4"
          key={i}
          textName={v?.photographer}
          content={v?.photographer}
          image={v?.src?.original}
          alt={v?.alt}
          id={v?.id}
          name={v?.name}
          footerImage="/Assets/Images/heart.svg"
        ></BookCard>
      </Fragment>
    );
  });

  // API get Request on refresh

  useEffect(() => {
    apiRequest("get", {}, []);
  }, []);

  // API get Request on refresh

  return (
    <Fragment>
      <div className="container-fluid">
        {/* Input to add books */}
        <Book></Book>
        {/* Input to add books */}

        <br></br>

        <div className="row">
          <div className="col">
            <div style={{ display: "inline-flex" }}>{renderBooks}</div>
          </div>
        </div>
      </div>
      <hr style={{ border: "4px dotted black" }}></hr>
    </Fragment>
  );
}

export default App;
