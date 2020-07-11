import React from "react";
import { Toolbar, Typography, makeStyles } from "@material-ui/core";
import "./Footer.styles.scss";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: '1rem'
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Toolbar className={classes.title}>
        <Typography>
          2020 &copy; Alfonsina Lizardo - Powered by
          Google Books
        </Typography>
      </Toolbar>
    </footer>
  );
};

export default Footer;
