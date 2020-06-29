import React from "react";
import { Grid } from "@material-ui/core";
import Book from "../Book/Book.component";
import Message from "../Message/Message.component";
import "./Books.styles.scss";

const Books = ({ books, message }) => {
  return (
    <Grid container spacing={2}>
      <div className="books-container">
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    </Grid>
  );
};

export default Books;
