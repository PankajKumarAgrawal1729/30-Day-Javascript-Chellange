const parentElement = document.createElement("div");
parentElement.addEventListener("click", (ev) =>{
    if(ev.target.classList.contains('child')){
        console.log("Child Element clicked");
    }
});
const childElement = document.createElement("div");
childElement.classList.add("child");
childElement.textContent = 'Click me!';
parentElement.appendChild(childElement);
document.body.appendChild(parentElement);