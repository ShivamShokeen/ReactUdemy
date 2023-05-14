import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
  let [bookList, setBookList] = useState([]);

  const handleBook = useCallback(async (callback) => {
    let checkname = bookList.find((v) => v?.name === callback?.name);
    if (!checkname) {
      let postData = await apiRequest("post", callback, 0);
    } else {
      alert("Please add unique book name");
    }
  }, []);

  const handleBookDelete = useCallback(async (callback) => {
    let deleteData = await apiRequest("delete", {}, callback);
  }, []);

  const handleBookEdit = useCallback(async (event, id) => {
    if (event !== undefined) {
      let patchData = await apiRequest("patch", event, id);
    }
  }, []);

  function apiRequest(type, payload, id) {
    var promise = new Promise((resolve, reject) => {
      if (type === "get") {
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

      if (type === "post") {
        axios
          .post("http://localhost:3001/books", payload)
          .then((response) => {
            setBookList([...bookList, response?.data]);
          })
          .catch((error) => {
            console.error("post error", error);
          });
      }

      if (type === "patch") {
        axios
          .patch("http://localhost:3001/books/" + id, payload)
          .then((response) => {
            let findIndex = bookList.findIndex(
              (v) => v.id === response?.data?.id
            );
            if (findIndex !== -1) {
              setBookList(
                bookList.map((u) =>
                  u.id !== response?.data?.id ? u : response?.data
                )
              );
            }
          })
          .catch((error) => {
            console.error("patch error", error);
          });
      }

      if (type === "delete") {
        axios
          .delete("http://localhost:3001/books/" + id)
          .then((response) => {
            let findIndex = bookList.findIndex((v) => v.id === id);
            if (findIndex !== -1) {
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

  const valueToShare = {
    bookList,
    apiRequest,
    handleBook,
    handleBookDelete,
    handleBookEdit,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
