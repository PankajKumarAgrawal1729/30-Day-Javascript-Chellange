const LAST_NAME = "lastname";
const fullname = {
  firstname: "Jahn",
  [LAST_NAME]: "Doe",
};
console.log(`My Full name: ${fullname.firstname} ${fullname.lastname}`);
// My Full name: Jahn Doe