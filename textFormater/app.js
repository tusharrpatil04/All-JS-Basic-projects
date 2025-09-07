//01) Count words -->

let inpBox = document.querySelector("textarea");
let totWords = document.querySelector("#totWords");
inpBox.addEventListener("input", () => {
  let words = inpBox.value.trim().split(/\s+/).length;
  totWords.innerHTML = words;
});

//02) Total Charecter -->
let char = document.querySelector("#totChar");
inpBox.addEventListener("input", () => {
  let totChar = inpBox.value.replace(/\s/g, "").length;
  char.innerText = totChar;
});

//03) Total Numbers -->
let countNum = document.querySelector("#totNum");

inpBox.addEventListener("input", () => {
  let text = inpBox.value;
  let totNum = (text.match(/[0-9]/g) || []).length;
  countNum.innerText = totNum;
});

//04)Toat Alphabets -->
let totAlph = document.querySelector("#totAlph");

inpBox.addEventListener("input", () => {
  let text = inpBox.value;
  let countAlph = (text.match(/[a-zA-Z]/g) || []).length;
  totAlph.innerText = countAlph;
});

//05)Toat Uppercase Later -->
let totUpper = document.querySelector("#totUpperCase");

inpBox.addEventListener("input", () => {
  let text = inpBox.value;
  let countUpper = (text.match(/[A-Z]/g) || []).length;
  totUpper.innerText = countUpper;
});

//05)Toat Uppercase Later -->
let totLover = document.querySelector("#totLoverCase");

inpBox.addEventListener("input", () => {
  let text = inpBox.value;
  let countLover = (text.match(/[a-z]/g) || []).length;
  totLover.innerText = countLover;
});
