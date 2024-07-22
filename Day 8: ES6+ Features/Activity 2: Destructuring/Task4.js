const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
};

const { title, author } = { ...book };

console.log(`The ${title} is written by ${author}`);
// The The Great Gatsby is written by F. Scott Fitzgerald