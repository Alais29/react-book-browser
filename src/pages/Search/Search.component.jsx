import React, { useContext, Fragment, useState } from "react";
import { BooksListContext } from "../../context/BooksListContext";
import { parameters, filters, orders } from "./../../constants/index";
import { Link } from 'react-router-dom';

const Search = () => {
  const { doneFetchBooks, books, message, validateSearch } = useContext(
    BooksListContext
  );
  const { title, author, publisher, category, isbn } = parameters;
  const { all, download, partial_preview, full_preview, free, paid, ebooks } = filters;
  const { relevance, newest } = orders;

  //set a State for parameter options
  const [parameter, setParameter] = useState('')
  const [filter, setFilter] = useState('')
  const [order, setOrder] = useState('')

  //Handle parameter, filter and order change
  const handleParameterChange = (e) => {
    setParameter(e.target.value)
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  const handleOrderChange = (e) => {
    setOrder(e.target.value)
  }

  return (
    <Fragment>
      <input type="text" id="q_book" onKeyPress={(e) => validateSearch(e, parameter, filter, order)} />
      <button onClick={(e) => validateSearch(e, parameter, filter, order)}>Search</button>
      <p>Search by</p>
      <div>
        <input 
          type="radio" 
          name="search-parameters" 
          value={title}
          onChange={(e) => handleParameterChange(e)}
          />
        <label>Title</label>
      </div>
      <div>
        <input 
          type="radio" 
          name="search-parameters" 
          value={author}
          onChange={(e) => handleParameterChange(e)}
          />
        <label>Author</label>
      </div>
      <div>
        <input 
          type="radio" 
          name="search-parameters" 
          value={publisher}
          onChange={(e) => handleParameterChange(e)}
          />
        <label>Publisher</label>
      </div>
      <div>
        <input 
          type="radio" 
          name="search-parameters" 
          value={category}
          onChange={(e) => handleParameterChange(e)}
          />
        <label>Category</label>
      </div>
      <div>
        <input 
          type="radio" 
          name="search-parameters" 
          value={isbn}
          onChange={(e) => handleParameterChange(e)}
          />
        <label>ISBN</label>
      </div>
      <p>Filter:</p>
      <select name="search-filters" value={filter} onChange={e => handleFilterChange(e)}>
        <option value={all}>All</option>
        <option value={download}>Download</option>
        <option value={partial_preview}>Partial Preview</option>
        <option value={full_preview}>Full Preview</option>
        <option value={free}>Free</option>
        <option value={paid}>Paid</option>
        <option value={ebooks}>Ebooks</option>
      </select>
      <p>Order by:</p>
      <select name="search-order" value={order} onChange={e => handleOrderChange(e)}>
        <option value={relevance}>Relevance</option>
        <option value={newest}>Newest</option>
      </select>

      {books.map(book => <p>{book.volumeInfo.title} <Link to="/details">Details</Link> </p>)}
    </Fragment>
  );
};

export default Search;
