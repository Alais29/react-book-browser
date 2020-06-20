import React, { Fragment, useContext, useState } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { Route, Link, Redirect } from "react-router-dom";
import Search from "../Search/Search.component";

const Home = () => {
  const { doneFetchBooks, books, message, validateSearch } = useContext(
    BooksListContext
  );
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Fragment>
      {books.length === 0 ? (
        <div>
          <input
            id="q_book"
            type="text"
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => validateSearch(e)}
          />
          <button onClick={(e) => validateSearch(e)}>Search</button>
        </div>
      ) : null}
      {doneFetchBooks ? (
        <Redirect to='/search' />
      ) : null}
    </Fragment>
  );
};

export default Home;
