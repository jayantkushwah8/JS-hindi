let n1 = 8;
document.getElementById("num1").textContent = n1;

let n2 = 2;
document.getElementById("num2").textContent = n2;

let res = document.getElementById("result")
let operator = document.getElementById("operator")

function add(){
    res.textContent = n1 + n2;
    operator.textContent = "+";
}
function sub(){
    res.textContent = n1 - n2;
    operator.textContent = "-";
}
function multi(){
    res.textContent = n1 * n2;
    operator.textContent = "*";
}
function divide(){
    res.textContent = n1 / n2;
    operator.textContent = "/";
}