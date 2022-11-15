import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import BooksListContextProvider from "./context/BooksListContext";
import BookDetailsContextProvider from "./context/BookDetailsContext";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import ScrollToTop from "./components/ScrollToTop.component";

const Search = React.lazy(() => import("./pages/Search/Search.component"));
const Home = React.lazy(() => import("./pages/Home/Home.component"));
const Details = React.lazy(() => import("./pages/Details/Details.component"));

function App() {
  const theme = createTheme ({
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
              <ScrollToTop />
              <Home />
            </Route>
            <Route path="/search">
              <ScrollToTop />
              <Search />
            </Route>
            <Route path="/details/:book_id">
              <BookDetailsContextProvider>
                <ScrollToTop />
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
