import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchParams from "../SearchParams/SearchParams.component";
import { useState } from "react";

const SearchBar = ({
  validateSearch,
  parameter,
  filter,
  order,
  history,
  home,
  search,
  setParameter,
  setFilter,
  setOrder,
}) => {
  
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleKeyPress = (e) => {
    validateSearch(e, parameter, filter, order);
    if (e.key !== "Enter") {
      return;
    } else if (home && e.key === "Enter" && e.target.value !== "") {
      history.push("/search");
    } else {
      e.preventDefault();
    }
  }

  return (
    // TODO clear search bar after search and add clear button to clear searched books
    <form autoComplete="off">
      <TextField
        label="Search for a book"
        id="q_book"
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={(e) => handleChange(e)}
        fullWidth={true}
        margin="normal"
        value={searchValue}
      />
      {/* TODO - Show error message when no query is made (still doesn't work when clicking the search button) */}
      {search ? (
        <SearchParams
          parameter={parameter}
          filter={filter}
          order={order}
          setParameter={setParameter}
          setFilter={setFilter}
          setOrder={setOrder}
        />
      ) : (
        home && (
          <Button
            variant="contained"
            color="secondary"
            style={{ marginRight: "0.5rem" }}
            onClick={() => {
              history.push("/search");
            }}
          >
            Advanced Search
          </Button>
        )
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          validateSearch(e, parameter, filter, order);
          history.push("/search");
        }}
      >
        Search
      </Button>
    </form>
  );
};

export default withRouter(SearchBar);
