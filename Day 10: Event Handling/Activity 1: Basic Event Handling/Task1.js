const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  para.innerText = "Changed Content";
});
