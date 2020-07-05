import React, { useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { BookDetailsContext } from "../../context/BookDetailsContext";
import Title from "../../components/Title/Title.component";
import Bookdetails from "../../components/BookDetails/BookDetails.component";
import { Container } from "@material-ui/core";

import './Details.styles.scss'

const Details = () => {
  const { doneFetchBookDetails, details } = useContext(BookDetailsContext);

  return (
    <Container>
      {doneFetchBookDetails && details ? (
        <Bookdetails details={details} />
      ) : (
        <div class="d-flex-center">
          <CircularProgress color="secondary" size="5rem" />
        </div>
      )}
    </Container>
  );
};

export default Details;
