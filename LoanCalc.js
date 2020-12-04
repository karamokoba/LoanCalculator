document.getElementById("kira").addEventListener("click", loancalc);
function loancalc(){
var principal = document.getElementById("principal").value;
var deposit = document.getElementById("deposit").value;
let totalPrinciple = principal-deposit;
document.getElementById("payment").innerHTML=totalPrinciple;

var years = document.getElementById("years").value;
var interest = document.getElementById("interest").value;
let totalInterest = (interest/100)*totalPrinciple*years;
document.getElementById("payment").innerHTML=totalInterest;


let totalToPay = totalInterest+totalPrinciple;
document.getElementById("payment").innerHTML=totalToPay;

let monthlyToPay = totalToPay/years/12;
document.getElementById("payment").innerHTML=monthlyToPay;

}
