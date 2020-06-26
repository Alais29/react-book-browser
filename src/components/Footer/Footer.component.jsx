import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { AppBar, Toolbar } from "@material-ui/core";
import "./Footer.styles.scss";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  title: {
    justifyContent: 'center',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Toolbar className={classes.title}>
        <Typography>
          {new Date().getFullYear()} &copy; Alfonsina Lizardo - Powered by
          Google Books
        </Typography>
      </Toolbar>
    </footer>
  );
};

export default Footer;
