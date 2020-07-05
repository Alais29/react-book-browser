import React, { Fragment } from "react";
import { Button } from "@material-ui/core";

const BookDetailsBtn = ({info, link, label, color}) => {
  return (
    <Fragment>
      <a
        href={info[link]}
        target="_blank"
        rel="noopener noreferrer"
        class="book-details__btn-link"
      >
        <Button variant="contained" color={color}>
          {label}
        </Button>
      </a>
    </Fragment>
  );
};

export default BookDetailsBtn;
