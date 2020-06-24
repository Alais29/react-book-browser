import React, { Fragment, useContext, useEffect } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { Link } from "react-router-dom";
import Title from '../../components/Title/Title.component';
import SearchBar from "../../components/SearchBar/SearchBar.component";

const Home = () => {
  const { doneFetchBooks, books, message, validateSearch, setBooks, setdoneFetchBooks } = useContext(
    BooksListContext
  );

  useEffect(() => {
    setdoneFetchBooks(false)
  }, [setdoneFetchBooks])

  return (
    <Fragment>
      <Link to='/search'>Advanced Search</Link>
      <Title text="Find your next favorite book!" />
      <SearchBar validateSearch={validateSearch} />
    </Fragment>
  );
};

export default Home;
