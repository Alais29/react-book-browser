import React from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";

const Searhparam = ({ param, items, setfunction, label }) => {
  const handleParameterChange = (e) => {
    setfunction(e.target.value);
  };

  return (
    <FormControl fullWidth margin="dense">
      <InputLabel>{label}</InputLabel>
      <Select value={param} onChange={(e) => handleParameterChange(e)}>
        {Object.entries(items).map((item) => (
          <MenuItem value={item[1]} key={item[0]}>
            {item[0][0].toUpperCase() + item[0].slice(1).replace("_", " ")}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Searhparam;
