import React, { createContext, useState } from "react";
import { booksSearch } from "./../constants/index";

export const BooksListContext = createContext();

const BooksListContextProvider = ({ children }) => {
  // States
  const [doneFetchBooks, setdoneFetchBooks] = useState(false);
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");
  const [errorQuery, setErrorQuery] = useState(true);

  //Fetchs
  //Fetch books based on parameters passed
  const getBooks = (parameter, filter, order, term) => {
    fetch(booksSearch(parameter, filter, order, term))
      .then((res) => res.json())
      .then((data) => {
        setdoneFetchBooks(true);
        if (data.error) {
          setMessage(data.error);
        } else if (data.totalItems === 0) {
          setMessage(
            "Sorry! There are no results, try searching with a different term and/or parameter"
          );
          setBooks([]);
        } else if (data.totalItems === undefined) {
          setMessage(
            "Sorry! There seems to be some networks issues. Please try again later."
          );
        } else {
          setBooks(data.items);
          setMessage("");
        }
      });
  };

  const validateSearch = (
    e,
    parameter,
    filter,
    order,
    q_book = document.querySelector("#q_book").value
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    if (q_book === "") {
      setErrorQuery(true);
      setMessage("Try searching for something first :)")
    } else {
      setErrorQuery(false);
      getBooks(parameter, filter, order, q_book);
    }
  };

  return (
    <BooksListContext.Provider
      value={{ doneFetchBooks, books, errorQuery, message, validateSearch, setBooks, setdoneFetchBooks, setErrorQuery, setMessage }}
    >
      {children}
    </BooksListContext.Provider>
  );
};

export default BooksListContextProvider;
