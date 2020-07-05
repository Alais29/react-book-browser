import React from "react";
import { Link } from "react-router-dom";
import { Paper, makeStyles, Typography, Button } from "@material-ui/core";
import noImg from "../../assets/no-image.png";
import "./Book.styles.scss";
import BookChip from "../BookChip/BookChip.component";

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
  },
  btnLink: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
  btn: {
    marginTop: "0.5rem",
  },
}));

const Book = ({ book }) => {
  const classes = useStyles();

  const { volumeInfo, saleInfo, accessInfo } = book;
  const { isEbook, saleability } = saleInfo;
  let imgURL = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : noImg;
  let publishedYear = volumeInfo.publishedDate
    ? volumeInfo.publishedDate.slice(0, 4)
    : null;

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
          <Typography variant="h6" component="h3" className={classes.bookTitle}>
            {volumeInfo.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.bookDate}
          >
            {publishedYear}
          </Typography>

          {volumeInfo.categories
            ? volumeInfo.categories.map((category) => (
                <BookChip label={category} color="chipCategory" />
              ))
            : null}

          {saleability === "FREE" ? (
            <BookChip label="Free" color="chipSuccess" />
          ) : saleability === "FOR_SALE" ? (
            <BookChip label="For Sale" color="chipInfo" />
          ) : saleability === "NOT_FOR_SALE" ? (
            <BookChip label="Not for sale" color="chipDanger" />
          ) : null}

          {isEbook ? <BookChip label="Ebook" color="chipSuccess" /> : null}

          {accessInfo.viewability === "PARTIAL" ? (
            <BookChip label="Partial Preview" color="chipWarning" />
          ) : accessInfo.viewability === "ALL_PAGES" ? (
            <BookChip label="Full Preview" color="chipSuccess" />
          ) : accessInfo.viewability === "NO_PAGES" ? (
            <BookChip label="No Preview" color="chipDanger" />
          ) : null}

          <Link to={`/details/${book.id}`} className={classes.btnLink}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.btn}
            >
              Details
            </Button>
          </Link>
        </div>
      </div>
    </Paper>
  );
};

export default Book;
