
const testo = document.getElementById("testo");
const btn = document.getElementById("btn")
let container = document.getElementById("container");
const testo2 = document.getElementById("testo2");
let visibile = "hidden";
let colore = "";
let inputNuovo = document.getElementById("input1")
let btnInput = document.getElementById("btnInput");

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
btnInput.addEventListener("click", function () {
    const newTesto = inputNuovo.value;
    testo.textContent = newTesto
    inputNuovo.value = "";
});
btn.addEventListener("click", changeColor)
btn.addEventListener("click", compare)



let lista = document.getElementById("list");
let btnList = document.getElementById("btnList");
let conteggio = document.getElementById("conteggio");
let conto = 0;
let btnElimina = document.getElementById("btnElimina");



function addElement() {
    conto += 1;
    const newLi = document.createElement("li");
    newLi.setAttribute("id", conto);
    //newLi.textContent = "Elemento " + conto + " Aggiunto";
    newLi.textContent = `Elemento ${conto} Aggiunto`;
    lista.appendChild(newLi);
    conteggio.textContent = "Numero Elementi:" + conto;

}

function remove() {
    lista.removeChild(lista.lastChild);
}



btnElimina.addEventListener("click", remove)
btnList.addEventListener("click", addElement)

