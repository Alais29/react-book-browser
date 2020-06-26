import React from "react";
import { parameters, filters, orders } from "./../../constants/index";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
import "./SearchParams.styles.scss";

const SearchParams = ({
  parameter,
  setParameter,
  filter,
  setFilter,
  order,
  setOrder,
}) => {
  const { title, author, publisher, category, isbn } = parameters;
  const {
    all,
    download,
    partial_preview,
    full_preview,
    free,
    paid,
    ebooks,
  } = filters;
  const { relevance, newest } = orders;

  //Handle parameter, filter and order change
  const handleParameterChange = (e) => {
    setParameter(e.target.value);
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs="12" sm="4">
        <FormControl fullWidth margin="normal" color="secondary">
          <InputLabel>Searh by</InputLabel>
          <Select
            value={parameter}
            onChange={(e) => handleParameterChange(e)}
          >
            <MenuItem value={title}>Title</MenuItem>
            <MenuItem value={author}>Author</MenuItem>
            <MenuItem value={publisher}>Publisher</MenuItem>
            <MenuItem value={category}>Category</MenuItem>
            <MenuItem value={isbn}>ISBN</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs="12" sm="4">
        <FormControl fullWidth margin="normal" color="secondary">
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            onChange={(e) => handleFilterChange(e)}
          >
            <MenuItem value={all}>All</MenuItem>
            <MenuItem value={download}>Download</MenuItem>
            <MenuItem value={partial_preview}>Partial Preview</MenuItem>
            <MenuItem value={full_preview}>Full Preview</MenuItem>
            <MenuItem value={free}>Free</MenuItem>
            <MenuItem value={paid}>Paid</MenuItem>
            <MenuItem value={ebooks}>Ebooks</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs="12" sm="4">
        <FormControl fullWidth margin="normal" color="secondary">
          <InputLabel>Order by</InputLabel>
          <Select
            value={order}
            onChange={(e) => handleOrderChange(e)}
          >
            <MenuItem value={relevance}>Relevance</MenuItem>
            <MenuItem value={newest}>Newest</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchParams;
