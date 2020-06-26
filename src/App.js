import React, { Fragment, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import BooksListContextProvider from "./context/BooksListContext";
import BookDetailsContextProvider from "./context/BookDetailsContext";
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Search from "./pages/Search/Search.component";
import Home from "./pages/Home/Home.component";
import Details from "./pages/Details/Details.component";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#9b6549',
      },
      secondary: {
        main: '#f3b366',
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
