import React, {Fragment} from 'react';
import { withRouter } from "react-router-dom";


const SearchBar = ({validateSearch, parameter, filter, order, history}) => {
  return (
    <Fragment>
      <input
        type="text"
        id="q_book"
        onKeyPress={(e) => {
          validateSearch(e, parameter, filter, order)
            if (e.key !== "Enter") {
              return
            } else {
              history.push("/search");
            };
        }}
      />
      <button onClick={(e) => {
        validateSearch(e, parameter, filter, order) 
        history.push("/search");
      }}>
        Search
      </button>
    </Fragment>
  )
}

export default withRouter(SearchBar);
