const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  updateYear: function (year) {
    this.year = year;
  },
};
console.log(book.getSummary());
// The Great Gatsby was written by F. Scott Fitzgerald in 1925

book.updateYear(2022);
console.log(book.getSummary());
// The Great Gatsby was written by F. Scott Fitzgerald in 2022
