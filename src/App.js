import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import BooksListContextProvider from "./context/BooksListContext";
import BookDetailsContextProvider from "./context/BookDetailsContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

// const Header = React.lazy( ()=> import('./components/Header/Header.component') )
// const Footer = React.lazy( ()=> import('./components/Footer/Footer.component') )
const Search = React.lazy(() => import("./pages/Search/Search.component"));
const Home = React.lazy(() => import("./pages/Home/Home.component"));
const Details = React.lazy(() => import("./pages/Details/Details.component"));

// TODO add animation when changing pages
// TODO check all components for variables not used and delete theme

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#9b6549",
      },
      secondary: {
        main: "#3786AD",
      },
      tertiary: {
        main: "#16487D",
        contrastText: "#ffffff",
        dark: "#0f3257",
      },
    },
    typography: {
      fontFamily: "Neuton",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Suspense
        fallback={
          <div className="home-loading-container">
            <CircularProgress size="5rem" color="secondary" />
          </div>
        }
      >
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
      </Suspense>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
