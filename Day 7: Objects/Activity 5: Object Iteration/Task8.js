const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}

// title : The Great Gatsby
// author : F. Scott Fitzgerald
// year : 1925
