import React, { Fragment } from 'react';
import './App.css';
import BooksListContextProvider from './context/BooksListContext';
import Search from './pages/Search/Search.component';
import Home from './pages/Home/Home.component';
import Details from './pages/Details/Details.component';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BooksListContextProvider>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/search'>
        <Search/>
      </Route>
      <Route path='/details'>
        <Details />
      </Route>
    </BooksListContextProvider>
  );
}

export default App;
