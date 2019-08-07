let btn = document.getElementById("btnMore");
let text = document.getElementById("read_more")

btn.addEventListener("click", readMore);

function readMore() {
    console.log("showText");
    text.style.display = "inline";
}