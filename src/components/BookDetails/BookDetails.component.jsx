import React, { Suspense } from "react";
import parse from "html-react-parser";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import Title from "../Title/Title.component";
import BookDetailsBtn from "./../BookDetailsBtns/BookDetailsBtn.component";
import NoInfo from "./../NoInfo/NoInfo.components";
import noImg from "../../assets/no-image.png";

import "./BookDetails.styles.scss";

const Image = React.lazy( ()=> import('../../components/Image/Image.component') );

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
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5} className="book-details__left">
        <Suspense fallback={<CircularProgress color="secondary" />}>
          <Image src={imgURL} alt={title} />
        </Suspense>
        {imgURL !== noImg && (
          <div
            className="book-details__left-bg"
            style={{
              backgroundImage: `url(${imgURL})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        )}
      </Grid>
      <Grid item xs={12} md={7} className="book-details__right" >
        <Title text={title} />
        <p className="book-details__right-info">
          <span>Release Date:</span> {publishedDate ? publishedDate : <NoInfo /> }
        </p>
        <p className="book-details__right-info">
          <span>Categories:</span> {categories ? categories : <NoInfo />}
        </p>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <div className="book-details__right-section">
              <Typography variant="h4" component="h2">
                Publisher:
              </Typography>
              <span>{publisher ? publisher : <NoInfo />}</span>
            </div>
          </Grid>
        </Grid>
        <div className="book-details__description">
          <Typography variant="h4" component="h2">
            Description:
          </Typography>
          {description ? parse(description) : <NoInfo />}
        </div>
        <div>
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
              color="success"
            />
          ) : accessInfo.viewability === "ALL_PAGES" ? (
            <BookDetailsBtn
              info={accessInfo}
              link="webReaderLink"
              label="Read Book"
              color="success"
            />
          ) : null}

          {accessInfo.viewability === "ALL_PAGES" &&
            accessInfo.epub.isAvailable && (
              <BookDetailsBtn
                info={accessInfo.epub}
                link="downloadLink"
                label="Download Ebook"
                color="tertiary"
              />
            )}
          {accessInfo.viewability === "ALL_PAGES" &&
            accessInfo.pdf.isAvailable && (
              <BookDetailsBtn
                info={accessInfo.pdf}
                link="downloadLink"
                label="Download PDF"
                color="tertiary"
              />
            )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Bookdetails;
