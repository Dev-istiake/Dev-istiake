let cD = document.querySelector("#calc-display");
let display = cD.querySelector("#display");

let cBC = document.querySelector("#calc-btn-cntr");
let cBtn = []
let cBtnlen = cBC.querySelectorAll(".btn").length;

for (i = 0; i < cBtnlen; i++){
    cBtn[i] = cBC.querySelectorAll(".btn")[i];
}

for (i = 0; i < cBtnlen; i++){
    cBtn[i].addEventListener("click", onclick);
}
function onclick(e) {
    value = e.target.value;
    display.value = value;
}

