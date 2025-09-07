let h3 = document.querySelector("h3");

let btn = document.querySelectorAll(".input");

let string = "";
let arr = Array.from(btn);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      h3.innerHTML = string;
    } else if (e.target.innerHTML == "AC") {
      string = "0";
      h3.innerHTML = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      h3.innerHTML = string;
    } else {
      string += e.target.innerHTML;
      h3.innerHTML = string;
    }
  });
});
