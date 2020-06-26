import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import "./Message.styles.scss";

const useStyles = makeStyles(() => ({
  root: {
    margin: "1rem 0",
  },
}));

const Message = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography align="center" component="h2" variant="h4" className={classes.root}>
      {text}
    </Typography>
  );
};

export default Message;
