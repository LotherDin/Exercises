const testo = document.getElementById("testo");
const btn = document.getElementById("btn")
let container = document.getElementById("container");
const testo2 = document.getElementById("testo2");

function changeColor() {
    testo.style.color = "red"
}
function compare() {
    testo2.style.visibility = "visible"
}
btn.addEventListener("click", changeColor)
btn.addEventListener("click", compare)