let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let ranPass = Math.floor(Math.random() * 10000);
    inp.value = ranPass;
});

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", function () {
  inp.value = "";
});
