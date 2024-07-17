const find = (str, char) => {
  return str.indexOf(char);
};
console.log(find("World", "i") != -1 ? "Character present" : "Not Found");  // Not Found
console.log(find("World", "o") != -1 ? "Character present" : "Not Found");  // Character present
