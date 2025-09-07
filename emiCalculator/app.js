let loanAmt = document.querySelector("#loanAmtRs");
let inRate = document.querySelector("#interstRateRs");
let loanTenure = document.querySelector("#inp");
let isMonth = document.querySelector(".month");
let isYear = document.querySelector(".year");
let submit = document.querySelector("#submit");
let reStart = document.querySelector(".green");
let totEmi = document.querySelector("#emi");
let totInterst = document.querySelector("#totIn");
let totAmount = document.querySelector("#totAmount");

submit.addEventListener("click", (e) => {
  e.preventDefault;
  Calculation();
});

function Calculation() {
  loanAmt = parseFloat(loanAmt.value);
  inRate = parseFloat(inRate.value);
  loanTenure = parseFloat(loanTenure.value);
  isMonth.value = loanTenure;
  let tenure = parseFloat(isMonth.value);

  //Calculate the total interst -->
  let totalInterst = (loanAmt * inRate * tenure) / 100;
  totInterst.innerText = totalInterst;

  //Calculate the total payment -->
  let totalPayment = loanAmt + totalInterst;
  totAmount.innerText = totalPayment;

  //Calculation EMI  -->
  let emi = totalPayment / (loanTenure * 12);
  totEmi.innerText = Math.floor(emi);
}

reStart.addEventListener("click", () => {
  location.reload();
});
