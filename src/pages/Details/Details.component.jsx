import React, { useContext } from "react";
import { Container, CircularProgress } from "@material-ui/core";
import { BookDetailsContext } from "../../context/BookDetailsContext";
import Bookdetails from "../../components/BookDetails/BookDetails.component";

import './Details.styles.scss'

const Details = () => {
  const { doneFetchBookDetails, details } = useContext(BookDetailsContext);

  return (
    <Container>
      {doneFetchBookDetails && details ? (
        <Bookdetails details={details} />
      ) : (
        <div className="d-flex-center">
          <CircularProgress color="secondary" size="5rem" />
        </div>
      )}
    </Container>
  );
};

export default Details;
