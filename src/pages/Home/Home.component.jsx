import React, { Fragment, useContext, useEffect } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { Link, withRouter } from "react-router-dom";

const Home = ({ history }) => {
  const { doneFetchBooks, books, message, validateSearch, setBooks, setdoneFetchBooks } = useContext(
    BooksListContext
  );

  useEffect(() => {
    setdoneFetchBooks(false)
  }, [setdoneFetchBooks])

  return (
    <Fragment>
      <Link to='/search'>Advanced Search</Link>
      <div>
        <input
          id="q_book"
          type="text"
          onKeyPress={(e) => {
            validateSearch(e);
            if (e.key !== "Enter") {
              return
            } else {
              history.push("/search");
            };

          }}
        />
        <button
          onClick={(e) => {
            validateSearch(e);
            history.push("/search");
          }}
        >
          Search
        </button>
      </div>
    </Fragment>
  );
};

export default withRouter(Home);
