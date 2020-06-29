import React from "react";
import { Link } from "react-router-dom";
import { Paper, makeStyles, Typography, Button, Chip } from "@material-ui/core";
import noImg from "../../assets/no-image.png";
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
  },
  btnLink: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
  btn: {
    marginTop: "0.5rem",
  },
  chipCategory: {
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.tertiary.contrastText,
    marginRight: '0.3rem',
    marginTop: '0.3rem'
  },
  chipSuccess: {
    backgroundColor: theme.palette.success.main,
    color: "#ffffff",
    marginRight: '0.3rem',
    marginTop: '0.3rem'
  },
  chipInfo: {
    backgroundColor: theme.palette.info.main,
    color: "#ffffff",
    marginRight: '0.3rem',
    marginTop: '0.3rem'
  },
  chipWarning: {
    backgroundColor: theme.palette.warning.main,
    color: "#ffffff",
    marginRight: '0.3rem',
    marginTop: '0.3rem'
  },
  chipDanger: {
    backgroundColor: theme.palette.error.main,
    color: "#ffffff",
    marginRight: '0.3rem',
    marginTop: '0.3rem'
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
                <Chip
                  size="small"
                  label={category}
                  className={classes.chipCategory}
                  key={category}
                />
              ))
            : null}

          {saleability === "FREE" ? (
            <Chip size="small" label="Free" className={classes.chipSuccess} />
          ) : saleability === "FOR_SALE" ? (
            <Chip size="small" label="For Sale" className={classes.chipInfo} />
          ) : saleability === "NOT_FOR_SALE" ? (
            <Chip
              size="small"
              label="Not for sale"
              className={classes.chipDanger}
            />
          ) : null}

          {isEbook ? (
            <Chip size="small" label="Ebook" className={classes.chipSuccess} />
          ) : null}

          {accessInfo.viewability === "PARTIAL" ?
            <Chip size="small" label="Partial Preview" className={classes.chipWarning} />
            : accessInfo.viewability === "ALL_PAGES" ?
            <Chip size="small" label="Full Preview" className={classes.chipSuccess} />
            : accessInfo.viewability === "NO_PAGES" ?
            <Chip size="small" label="No Preview" className={classes.chipDanger} />
            : null
          }
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.btn}
          >
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
