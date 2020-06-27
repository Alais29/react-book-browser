import React from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";

const Searhparam = ({ param, items, setfunction }) => {
  const handleParameterChange = (e) => {
    setfunction(e.target.value);
  };

  return (
    <FormControl fullWidth margin="dense">
      <InputLabel>Searh by</InputLabel>
      {/* TODO - WHEN ALL FILTER IS CHOSEN IT DOESN'T SHOW IN THE SELECT */}
      <Select value={param} onChange={(e) => handleParameterChange(e)}>
        {Object.entries(items).map((item) => (
          <MenuItem value={item[1]}>
            {item[0][0].toUpperCase() + item[0].slice(1).replace("_", " ")}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Searhparam;
