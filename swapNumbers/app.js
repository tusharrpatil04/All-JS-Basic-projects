let fristNum = document.querySelector("#frist");
let secondNum = document.querySelector("#second");

let swap = document.querySelector(".swap");
swap.addEventListener("click", function(){
    let temp = fristNum.value;
    fristNum.value = secondNum.value;
    secondNum.value = temp;
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", function(){
    fristNum.value = "";
    secondNum.value = ""; 
});