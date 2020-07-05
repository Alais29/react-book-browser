import React from "react";
import parse from "html-react-parser";
import { Grid, Typography, Button } from "@material-ui/core";
import Title from "../Title/Title.component";
import BookDetailsBtn from "./../BookDetailsBtns/BookDetailsBtn.component";
import noImg from "../../assets/no-image.png";

import "./BookDetails.styles.scss";

const Bookdetails = ({ details }) => {
  const { saleInfo, accessInfo, volumeInfo } = details;
  const {
    title,
    authors,
    publisher,
    publishedDate,
    description,
    categories,
  } = volumeInfo;
  let imgURL = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : noImg;
  // TODO make N/A text into a component, or even make each details section into a component
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5} className="book-details__left">
        <img src={imgURL} alt={title} />
        {imgURL !== noImg && (
          <div
            class="book-details__left-bg"
            style={{
              backgroundImage: `url(${imgURL})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        )}
      </Grid>
      <Grid item md={7}>
        <Title text={title} />
        <p className="book-details__right-info">
          <span>Release Date:</span> {publishedDate ? publishedDate : "N/A"}
        </p>
        <p className="book-details__right-info">
          <span>Categories:</span> {categories ? categories : "N/A"}
        </p>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="book-details__right-section">
              <Typography variant="h4" component="h2">
                Authors:
              </Typography>
              {authors ? (
                authors.map((author, index) => (
                  <span key={`author_${index}`}>
                    {(index ? ", " : "") + author}
                  </span>
                ))
              ) : (
                <span>N/A</span>
              )}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="book-details__right-section">
              <Typography variant="h4" component="h2">
                Publisher:
              </Typography>
              <span>{publisher ? publisher : "N/A"}</span>
            </div>
          </Grid>
        </Grid>
        <Typography variant="h4" component="h2">
          Description:
        </Typography>
        <p>{description ? parse(description) : "N/A"}</p>

        {saleInfo.saleability === "FOR_SALE" && (
          <BookDetailsBtn
            info={saleInfo}
            link="buyLink"
            label="Buy here"
            color="secondary"
          />
        )}

        {accessInfo.viewability === "PARTIAL" ? (
          <BookDetailsBtn
            info={accessInfo}
            link="webReaderLink"
            label="Read Sample"
            color="secondary"
          />
        ) : accessInfo.viewability === "ALL_PAGES" ? (
          <BookDetailsBtn
            info={accessInfo}
            link="webReaderLink"
            label="Read Book"
            color="secondary"
          />
        ) : null}

        {accessInfo.viewability === "ALL_PAGES" &&
          accessInfo.epub.isAvailable && (
            <BookDetailsBtn
              info={accessInfo.epub}
              link="downloadLink"
              label="Download Ebook"
              color="secondary"
            />
          )}
        {accessInfo.viewability === "ALL_PAGES" &&
          accessInfo.pdf.isAvailable && (
            <BookDetailsBtn
              info={accessInfo.pdf}
              link="downloadLink"
              label="Download PDF"
              color="secondary"
            />
          )}
      </Grid>
    </Grid>
  );
};

export default Bookdetails;
