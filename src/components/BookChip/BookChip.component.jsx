import React from "react";
import { makeStyles, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chipCategory: {
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.tertiary.contrastText,
    marginRight: "0.3rem",
    marginTop: "0.3rem",
  },
  chipSuccess: {
    backgroundColor: theme.palette.success.main,
    color: "#ffffff",
    marginRight: "0.3rem",
    marginTop: "0.3rem",
  },
  chipInfo: {
    backgroundColor: theme.palette.info.main,
    color: "#ffffff",
    marginRight: "0.3rem",
    marginTop: "0.3rem",
  },
  chipWarning: {
    backgroundColor: theme.palette.warning.main,
    color: "#ffffff",
    marginRight: "0.3rem",
    marginTop: "0.3rem",
  },
  chipDanger: {
    backgroundColor: theme.palette.error.main,
    color: "#ffffff",
    marginRight: "0.3rem",
    marginTop: "0.3rem",
  },
}));

const BookChip = ({ label, color }) => {
  const classes = useStyles();

  return (
    <Chip size="small" label={label} className={classes[color]} key={label} />
  );
};

export default BookChip;
