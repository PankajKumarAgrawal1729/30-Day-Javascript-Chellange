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
// const booksArray = librariesArray.reduce((acc, library) => {
//   return acc.concat(library.books);
// }, []);
// console.log(booksArray);

librariesArray.map((library) => {
  console.log("Library Name: " + library.name);
  console.log("Books in Library: ");
  library.books.map((book) => {
    console.log(book.title);
  });
});

/*
Library Name: library1
Books in Library: 
book1
book2
book3
Library Name: library2
Books in Library: 
book4
book5
book6
Library Name: library3
Books in Library: 
book7
book8
book9
*/
