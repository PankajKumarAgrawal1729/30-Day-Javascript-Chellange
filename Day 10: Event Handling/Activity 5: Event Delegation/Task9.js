document.getElementById("item-list").addEventListener("click", (ev) => {
    let content = ev.target.innerText;
    document.getElementById("content").innerText = content;
})