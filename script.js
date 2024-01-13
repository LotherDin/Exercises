const testo = document.getElementById("testo");
const btn = document.getElementById("btn")
let container = document.getElementById("container");

function changeColor() {
    testo.style.color = "red"
}
btn.addEventListener("click", changeColor)