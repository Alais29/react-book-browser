import React, {Fragment} from 'react';
import Book from '../Book/Book.component';
import Message from '../Message/Message.component';
import './Books.styles.scss';

const Books = ({books, message}) => {
  return (
    <Fragment>
      {books.length !== 0 ? (
        books.map((book) => (
          <Book book={book} />
        ))
      ) : (
        <Message message={message} />
      )}
    </Fragment>
  )
}

export default Books
