import React from "react";
import { Link } from "react-router-dom";
import { Paper, makeStyles, Typography, Button } from "@material-ui/core";
import "./Book.styles.scss";

const useStyles = makeStyles((theme) => ({
  bookTitle: {
    fontSize: "1rem",
    lineHeight: "1.2rem",
  },
  bookDate: {
    fontSize: "0.8rem",
  },
  bookContent: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: "100%",
    position: "relative",
    top: "253px",
    zIndex: "2",
    transition: "top 0.3s ease-in-out",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  btnLink: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  btn: {
    marginTop: '0.5rem'
  }
}));

const Book = ({ book }) => {
  const classes = useStyles();

  const { volumeInfo, saleInfo, accesInfo } = book;
  let imgURL = volumeInfo.imageLinks
    ? volumeInfo.imageLinks.thumbnail
    : "https://www.chilecip.cl/wp-content/themes/consultix/images/no-image-found-360x260.png";
  return (
    <Paper className="book__paper">
      <div className="book__img-container">
        <img
          className="book__bg-img"
          src={imgURL}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className={classes.bookContent}>
        <div className="book__top">
          <Typography variant="h6" component="h6" className={classes.bookTitle}>
            {volumeInfo.title}
          </Typography>
          <Typography variant="h6" component="h6" className={classes.bookDate}>
            {volumeInfo.publishedDate}
          </Typography>
        </div>
        <div>
          <Button variant="contained" color="primary" fullWidth>
            <Link to={`/details/${book.id}`} className={classes.btnLink}>
              Details
            </Link>
          </Button>
        </div>
        {/* <p>{volumeInfo.title}</p> */}
      </div>
    </Paper>

    // <p>
    //   {book.volumeInfo.title} <Link to={`/details/${book.id}`}>Details</Link>
    // </p>
  );
};

export default Book;
