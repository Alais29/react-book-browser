import React, { useContext, useState, Suspense, useEffect } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { Container, Paper, CircularProgress } from "@material-ui/core";
import SearchBar from "../../components/SearchBar/SearchBar.component";
import Title from "../../components/Title/Title.component";
import Message from "../../components/Message/Message.component";

import "./Search.styles.scss";

const Books = React.lazy(() =>
  import("../../components/Books/Books.component")
);

const Search = () => {
  const {
    doneFetchBooks,
    books,
    message,
    validateSearch,
    setMessage,
  } = useContext(BooksListContext);

  //set a State for parameter, filter and order options
  const [parameter, setParameter] = useState("");
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    setMessage("");
  }, [setMessage]);

  return (
    <Container className="container-search">
      <Title
        text="Search by different parameters, filters and/or order"
        align="center"
      />
      <Paper
        elevation={3}
        className="advanced-search__paper"
        style={{ marginBottom: "1rem" }}
      >
        <SearchBar
          search
          validateSearch={validateSearch}
          parameter={parameter}
          filter={filter}
          order={order}
          setParameter={setParameter}
          setFilter={setFilter}
          setOrder={setOrder}
        />
      </Paper>
      <Suspense
        fallback={
          <div className="search-loading-container">
            <CircularProgress size="3rem" color="secondary" />
          </div>
        }
      >
        {doneFetchBooks && books.length !== 0 && (
          <Books books={books} message={message} />
        )}
        <Message text={message} />
      </Suspense>
    </Container>
  );
};

export default Search;
