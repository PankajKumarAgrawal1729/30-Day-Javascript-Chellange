document.getElementById("formTitle").addEventListener("change", (ev) =>{
    let idx = ev.target.value;
    let title = ev.currentTarget[idx - 1].text;
    document.getElementById("content").innerText = title;
})