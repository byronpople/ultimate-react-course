const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*// Destructuring
const books = getBooks();
books;
const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
title;
author;
pages;
publicationDate;
genres;
hasMovieAdaptation;

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// SpreadOperater
const newGenres = [...genres, "epic-genre"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-09",

  // Overwritting an existing property
  pages: 1988,
};
updatedBook;

// Template Literals
const summary = `${title}. a ${pages}-page book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
summary;

// Ternaries Instead of if/else Statments
pages > 1000 ? "overa thousand" : "less than 1000";

// Arrow Functions
const getYear = (str) => str.split("-")[0];
// Standard funtion:
// function getYear(str) {
//   return str.split("-")[0];
// }
console.log(getYear(publicationDate));

// Short-Circuiting And Logical Operators: &&, ||, ??
console.log(true && " some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "some string");
console.log(0 && "some string");

console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// const bookReviewsCount = book.reviews.librarything.reviewsCount;
// console.log(bookReviewsCount);
// const countWrong = bookReviewsCount || "no data";
// countWrong;
// // falsy now only works for null, undifined
// const count = bookReviewsCount ?? "no data";
// count;

// Optional Chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  goodreads;
  librarything;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

// MAP method
const books = getBooks();
books;

// const titles = books.map((book) => book.title);
// titles;

// const essentailData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// essentailData;

// FILTER method
const longBooks = books.filter((book) => book.pages > 500);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// REDUCE method creates new array
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// SORT method changes original array - use slice() to create copy of original array
const arr = [3, 6, 1, 7, 2, 9];
const sortAssendingOrder = arr.slice().sort((a, b) => a - b);
const sortDessendingOrder = arr.slice().sort((a, b) => b - a);
arr;
sortAssendingOrder;
sortDessendingOrder;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
const sortedByPagesTestByron = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => ({ title: book.title, pages: book.pages }));
sortedByPages;
sortedByPagesTestByron;

//Immutable Arrays
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Byron's Greatest Story",
  author: "Sir Byron Pople",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id == 6 ? { ...book, pages: 9999, title: "Bubz Big Book" } : book
);
booksAfterUpdate;
