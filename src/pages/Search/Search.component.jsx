import React, { useContext, useState } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { Container, Paper } from "@material-ui/core";
import SearchBar from "../../components/SearchBar/SearchBar.component";
import Books from "../../components/Books/Books.component";

import "./Search.styles.scss";
import Title from "../../components/Title/Title.component";

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
      <Title
        text="Go on, Try it!"
        align="center"
      />
      <Paper elevation={3} className="advanced-search__paper">
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
      <Books books={books} message={message} />
    </Container>
  );
};

export default Search;
