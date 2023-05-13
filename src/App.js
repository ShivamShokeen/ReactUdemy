import logo from "./logo.svg";
import "./App.css";
import { Fragment, useContext, useEffect, useState } from "react";
import Dash, { NewFun, addCal } from "./Components/Dashboard";
import Cards from "./Shared/Cards/Cards";
import axios, { Axios } from "axios";
import Searchbar from "./Components/Searchbar";
import Book from "./Components/Books/Book";
import BookCard from "./Components/Books/BookCard";
import BookContext from "./context/book";

// Function to callback random strings starts
function getAnimals() {
  let animals = ["cat", "horse", "bird", "gator", "dog", "unknown"];

  return animals[Math.floor(Math.random() * animals.length)];
}
// Function to callback random strings ends

function App() {
  let minNumber = 1;
  let maxNumber = 100;
  let maxLength = 1;

  // Animals
  
  const [animalCard, setAnimal] = useState([]);

  const addCard = () => {
    setAnimal([...animalCard, getAnimals()]);
  };

  const renderAnimals = animalCard.map((v, i) => {
    return (
      <Cards
        className="mt-4"
        key={i}
        textName={v}
        content="Hello First"
        image={
          v == "bird"
            ? "/Assets/Images/bird.svg"
            : v == "cat"
            ? "/Assets/Images/cat.svg"
            : v == "horse"
            ? "/Assets/Images/horse.svg"
            : v == "gator"
            ? "/Assets/Images/gator.svg"
            : v == "dog"
            ? "/Assets/Images/bird.svg"
            : "/Assets/Images/nopreview.png"
        }
        alt="https://picsum.photos/530/300"
        footerImage="/Assets/Images/heart.svg"
      ></Cards>
    );
  });
  // Animals

  // Search

  // searchList = [];
  const [searchInput, SetSearch] = useState("");
  const [searchList, SetListData] = useState([]);

  const renderSearch = searchList.map((v, i) => {
    return (
      <Cards
        className="mt-4"
        key={i}
        textName={v.photographer}
        content={v.photographer}
        image={v.src.original}
        alt={v.alt}
        footerImage="/Assets/Images/heart.svg"
      ></Cards>
    );
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchClick();
    }
  };

  const searchClick = async () => {
    console.log("hit", searchInput);
    if (searchInput != "") {
      let resp = await axios
        .get(
          "https://api.pexels.com/v1/search?page=1&query=" +
            searchInput.toLocaleLowerCase(),
          {
            Authorization:
              "VLk5d3NOGoMCxTsQi3F0OlHOkMI2VbelAMnwTIyaK2KbWXVGz1IL74xL",
          }
        )
        .then((response) => {
          SetListData([...response?.data?.photos]);
        })
        .catch((error) => {
          SetListData([]);
          console.error(error);
        })
        .finally(() => {});
    } else {
      SetListData([]);
    }
  };

  // Search

  // Searchbar child callback

  const searchBarCallback = (data) => {
    console.log("Parent called with data", data);
    SetSearch(data);
    console.log("searchInput", searchInput);
    if (data != "") {
      searchClick();
      console.log("Parent called with data1", data);
    }
  };

  // Searchbar child callback

  // Book

  let [bookList, setBookList] = useState([]);

  const handleBook = async (callback) => {
    let checkname = bookList.find((v) => v?.name == callback?.name);
    if (!checkname) {
      let postData = await apiRequest("post", callback, 0);
    } else {
      alert("Please add unique book name");
    }
  };

  const handleBookDelete = async (callback) => {
    // setBookList(bookList.filter((item, index) => index !== callback));
    let deleteData = await apiRequest("delete", {}, callback);
  };

  const handleBookEdit = async (event) => {
    if (event != undefined) {
      // let findIndex = bookList.findIndex((v) => v.id == event.id);
      // if (findIndex != -1) {
      //   setBookList(bookList.map((u) => (u.id != event.id ? u : event)));
      // }
      let patchData = await apiRequest("patch", event, event?.id);
    }
  };

  let renderBooks = bookList.map((v, i) => {
    return (
      <Fragment key={i}>
        <BookCard
          handleDelete={handleBookDelete}
          image="Assets/Images/mustang.jpeg"
          title={v.name}
          onEdit={handleBookEdit}
          index={i}
          id={v.id}
          content="First Card"
        ></BookCard>
      </Fragment>
    );
  });

  // Book

  // API Request Handle

  function apiRequest(type, payload, id) {
    var promise = new Promise((resolve, reject) => {
      if (type == "get") {
        axios
          .get("http://localhost:3001/books")
          .then((respose) => {
            setBookList(respose.data);
          })
          .catch((error) => {
            console.error("get error", error);
            return error;
          });
      }

      if (type == "post") {
        axios
          .post("http://localhost:3001/books", payload)
          .then((response) => {
            setBookList([...bookList, ...response.data]);
          })
          .catch((error) => {
            console.error("post error", error);
          });
      }

      if (type == "patch") {
        axios
          .patch("http://localhost:3001/books/" + id, payload)
          .then((response) => {
            let findIndex = bookList.findIndex(
              (v) => v.id == response?.data?.id
            );

            if (findIndex != -1) {
              setBookList(
                bookList.map((u) =>
                  u.id != response?.data?.id ? u : response?.data
                )
              );
            }
          })
          .catch((error) => {
            console.error("patch error", error);
          });
      }

      if (type == "delete") {
        axios
          .delete("http://localhost:3001/books/" + id)
          .then((response) => {
            let findIndex = bookList.findIndex((v) => v.id == id);
            if (findIndex != -1) {
              setBookList(
                bookList.filter((item, index) => index !== findIndex)
              );
            }
          })
          .catch((error) => {
            console.error("delete error", error);
          });
      }
    });
  }

  useEffect(() => {
    apiRequest("get", {}, 0);
  }, []);

  // API Request Handle

  return (
    <Fragment>
      <div className="container-fluid">
        <span>Context Value - {useContext(BookContext)}</span>
        <br></br>

        <Book onClick={handleBook}></Book>
        <br></br>

        <div className="row">
          <div className="col">
            <div style={{ display: "inline-flex" }}>{renderBooks}</div>
          </div>
        </div>
      </div>

      <hr style={{ border: "4px dotted black" }}></hr>

      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-12">
            <Searchbar onSubmit={searchBarCallback}></Searchbar>
          </div>
          <div className="col-3">
            <Cards
              dataList={searchList}
              footerImage="/Assets/Images/heart.svg"
            ></Cards>
          </div>
          {/* <div className="col-3">{renderSearch}</div> */}
        </div>
      </div>

      <hr></hr>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-4">
            <button className="btn btn-primary" onClick={addCard}>
              Add Card
            </button>
            <br></br> <br></br>
            The total number of card is {animalCard.toString()}
          </div>

          <div className="col-3">{renderAnimals}</div>
        </div>
        <br></br>
        <Dash></Dash> <br></br>
        {NewFun}
        <br></br>
        {addCal()}
        <input
          className="form-control mt-2"
          type="number"
          placeholder="Enter a number"
          min={minNumber}
          max={maxNumber}
          style={{ color: "red" }}
          maxLength={maxLength}
        ></input>
      </div>
    </Fragment>
  );
}

export default App;
