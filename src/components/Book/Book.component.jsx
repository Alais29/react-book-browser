import React from "react";
import { Link } from 'react-router-dom';
import './Book.styles.scss';

const Book = ({book}) => {
  return (
    <p>
      {book.volumeInfo.title} <Link to={`/details/${book.id}`}>Details</Link>
    </p>
  );
};

export default Book;
