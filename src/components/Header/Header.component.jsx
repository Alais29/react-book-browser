import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import './Header.styles.scss';

const useStyles = makeStyles((theme) => ({
  appbar: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Toolbar>
        <Link to='/' className={classes.link}>
          <Typography align='center' component='h1' variant='h4' className={classes.title}>
            Bookssy
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
