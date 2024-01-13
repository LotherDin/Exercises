const testo = document.getElementById("testo");
const btn = document.getElementById("btn")
let container = document.getElementById("container");
const testo2 = document.getElementById("testo2");
let visibile = "hidden";
let colore = "";

function changeColor() {
    if (colore == "") {
        testo.style.color = "red"
        colore = "red";
    } else {
        testo.style.color = "";
        colore = "";


    }


}
function compare() {
    if (visibile == "hidden") {
        testo2.style.visibility = "visible"
        visibile = "visible";

    } else {
        testo2.style.visibility = "";
        visibile = "hidden";

    }

}
btn.addEventListener("click", changeColor)
btn.addEventListener("click", compare)