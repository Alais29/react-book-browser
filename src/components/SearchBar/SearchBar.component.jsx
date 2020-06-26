import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchParams from "../SearchParams/SearchParams.component";

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
  return (
    <form autoComplete="off">
      <TextField
        label="Search for a book"
        id="q_book"
        onKeyPress={(e) => {
          validateSearch(e, parameter, filter, order);
          if (e.key !== "Enter") {
            return;
          } else if (home && e.key === "Enter") {
            history.push("/search");
          } else {
            e.preventDefault();
          }
        }}
        fullWidth={true}
        margin="normal"
      />
      {/* TODO - Show error message when no query is made */}
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
      {/* {home && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/search");
          }}
        >
          Advanced Search
        </Button>
      )} */}
    </form>
  );
};

export default withRouter(SearchBar);
