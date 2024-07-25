const img = document.getElementById("toggle");
let istoggled = false;
let naruto =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9RiCn_q7Sb-CrhRj-aimuCB-Qvd5Yc3Ecg&s";
let hinata =
  "https://i.pinimg.com/736x/37/20/5a/37205ac478c7299402b889cf9353680f.jpg";
img.addEventListener("dblclick", () => {
  img.src = istoggled ? naruto : hinata;
  istoggled = !istoggled;
});
