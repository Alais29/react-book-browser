//Base URL
const base_url = "https://www.googleapis.com/books/v1/volumes/";
// TODO HIDE API KEY
export const api_key = "AIzaSyBZdi-PBsLtDppYi1l8l1jnbPK6DYrh0-Q";

//search
const query = "?q=";

//search parameters
export const parameters = {
  title: "intitle:",
  author : "inauthor:",
  publisher : "inpublisher:",
  category : "subject:",
  isbn : "isbn:"
}

//filters
export const filters = {
  all: ' ',
  download : "&download=epub",
  partial_preview : "&filter=partial",
  full_preview : "&filter=full",
  free : "&filter=free-ebooks",
  paid : "&filter=paid-ebooks",
  ebooks : "&filter=ebooks"
}

// order
export const orders = {
  relevance : '&orderBy=relevance',
  newest : '&orderBy=newest'
}

//Route
export const booksSearch = (parameter = parameters.title, filter = filters.all, order = orders.relevance, term) => `${ base_url }${ query }${ parameter }${ term }${ filter }${ order }&maxResults=36&key=${api_key}`;
export const bookDetails = book_id => `${ base_url }${ book_id }?key=${ api_key }`;

