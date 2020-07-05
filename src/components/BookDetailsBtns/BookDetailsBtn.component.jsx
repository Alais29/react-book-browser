import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    marginRight: '0.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    }
  },
  tertiary: {
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.tertiary.contrastText,
    marginRight: '0.5rem',
    '&:hover': {
      backgroundColor: theme.palette.tertiary.dark,
    }
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: "#ffffff",
    marginRight: '0.5rem',
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    }
  },
}));

const BookDetailsBtn = ({info, link, label, color}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <a
        href={info[link]}
        target="_blank"
        rel="noopener noreferrer"
        class="book-details__btn-link"
      >
        <Button variant="contained" className={classes[color]}>
          {label}
        </Button>
      </a>
    </Fragment>
  );
};

export default BookDetailsBtn;
