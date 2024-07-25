document.getElementById("formData").addEventListener("submit", (ev) => {
    ev.preventDefault();
    let name = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    console.log(`Your name is ${name} and email is ${email}`);
})