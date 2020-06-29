import React, { useContext, useState } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { Container, Paper } from "@material-ui/core";
import SearchBar from "../../components/SearchBar/SearchBar.component";
import Books from "../../components/Books/Books.component";

import "./Search.styles.scss";
import Title from "../../components/Title/Title.component";
import Message from "../../components/Message/Message.component";

const Search = () => {
  const { doneFetchBooks, books, message, validateSearch } = useContext(
    BooksListContext
  );

  //set a State for parameter, filter and order options
  const [parameter, setParameter] = useState("");
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");

  return (
    <Container className="container-search">
      <Title
        text="Search by different parameters, filters and/or order!"
        align="center"
      />
      <Title text="Go on, Try it!" align="center" />
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
      {doneFetchBooks && books.length !== 0 ? (
        <Books books={books} message={message} />
      ) : doneFetchBooks && books.length === 0 ? (
        <Message text="Sorry! There are no results, try searching with a different term and/or parameter" />
      ) : null
      }
    </Container>
  );
};

export default Search;
