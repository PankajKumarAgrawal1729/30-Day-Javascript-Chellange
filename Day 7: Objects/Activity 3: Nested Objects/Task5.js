const libraries = {
  library1: {
    name: "library1",
    books: [
      {
        title: "book1",
        author: "author1",
      },
      {
        title: "book2",
        author: "author2",
      },
      {
        title: "book3",
        author: "author3",
      },
    ],
  },
  library2: {
    name: "library2",
    books: [
      {
        title: "book4",
        author: "author4",
      },
      {
        title: "book5",
        author: "author5",
      },
      {
        title: "book6",
        author: "author6",
      },
    ],
  },
  library3: {
    name: "library3",
    books: [
      {
        title: "book7",
        author: "author7",
      },
      {
        title: "book8",
        author: "author8",
      },
      {
        title: "book9",
        author: "author9",
      },
    ],
  },
};

const librariesArray = Object.values(libraries);
console.log(librariesArray);

/*
[
  { name: 'library1', books: [ [Object], [Object], [Object] ] },
  { name: 'library2', books: [ [Object], [Object], [Object] ] },
  { name: 'library3', books: [ [Object], [Object], [Object] ] }
]
*/
