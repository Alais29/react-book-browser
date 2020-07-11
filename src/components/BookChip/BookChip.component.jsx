import React from "react";
import { makeStyles, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: "0.3rem",
    marginTop: "0.3rem",
    color: "#ffffff"
  },
  chipCategory: {
    backgroundColor: theme.palette.tertiary.main,
  },
  chipSuccess: {
    backgroundColor: theme.palette.success.main,
  },
  chipInfo: {
    backgroundColor: theme.palette.info.main,
  },
  chipWarning: {
    backgroundColor: theme.palette.warning.main,
  },
  chipDanger: {
    backgroundColor: theme.palette.error.main,
  },
}));

const BookChip = ({ label, color }) => {
  const classes = useStyles();

  return (
    <Chip size="small" label={label} className={`${classes[color]} ${classes.chip}`} key={label} />
  );
};

export default BookChip;
