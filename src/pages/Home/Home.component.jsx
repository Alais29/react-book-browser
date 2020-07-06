import React, { useContext, Suspense } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import Title from '../../components/Title/Title.component';
import SearchBar from "../../components/SearchBar/SearchBar.component";
import GirlReading from '../../assets/Bibliophile.svg';

import './Home.styles.scss';

const Image = React.lazy( ()=> import('../../components/Image/Image.component') )

const Home = () => {
  const { doneFetchBooks, books, message, validateSearch, setBooks, setdoneFetchBooks } = useContext(
    BooksListContext
  );
  // TODO when going back to homepage, clear books searched
  return (
    <Container className="container-home">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} className="container-home__col-left">
          <Title text="Find your next favorite book!" />
          <SearchBar validateSearch={validateSearch} home />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="home-img-container">
            <Suspense fallback={<CircularProgress color="secondary" />}>
              <Image src={GirlReading} alt="Reading" />
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
