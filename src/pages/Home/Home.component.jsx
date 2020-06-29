import React, { Fragment, useContext, useEffect } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { Container, Grid } from "@material-ui/core";
import Title from '../../components/Title/Title.component';
import SearchBar from "../../components/SearchBar/SearchBar.component";
import GirlReading from '../../assets/Bibliophile.svg';

import './Home.styles.scss';

const Home = () => {
  const { doneFetchBooks, books, message, validateSearch, setBooks, setdoneFetchBooks } = useContext(
    BooksListContext
  );

  return (
    <Container className="container-home">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} className="container-home__col-left">
          <Title text="Find your next favorite book!" />
          <SearchBar validateSearch={validateSearch} home />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="home-img-container">
            <img src={GirlReading} alt="Reading"/>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
