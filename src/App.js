import React, { Fragment } from "react";
import "./App.css";
import BooksListContextProvider from "./context/BooksListContext";
import BookDetailsContextProvider from "./context/BookDetailsContext";
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Search from "./pages/Search/Search.component";
import Home from "./pages/Home/Home.component";
import Details from "./pages/Details/Details.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <BooksListContextProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/details/:book_id">
            <BookDetailsContextProvider>
              <Details />
            </BookDetailsContextProvider>
          </Route>
        </BooksListContextProvider>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
