let btn = document.querySelector(".resBtn");
let res = document.querySelector("#result");

btn.addEventListener("click", () => {
  let w = parseFloat(document.querySelector("#w").value);
  let j = parseFloat(document.querySelector("#j").value);
  let p = parseFloat(document.querySelector("#p").value);
  let cmp = parseFloat(document.querySelector("#c").value);

  let tot = w + j + p + cmp;
  let per = tot / 4;
  let grade = "";
  let pF = "";

  if (tot > 450) {
    grade = "O";
    pF = "Pass";
  } else if (tot > 400) {
    grade = "A";
    pF = "Pass";
  } else if (tot > 350) {
    grade = "B";
    pF = "Pass";
  } else if (tot > 300) {
    grade = "C";
    pF = "Pass";
  } else if (tot > 250) {
    grade = "D";
    pF = "Pass";
  } else if (tot > 200) {
    grade = "E";
    pF = "Pass";
  } else if (tot <= 200) {
    grade = "Fail";
    pF = "Fail";
  }

  res.innerHTML = `Out of <span>400</span> toatl is  <span>${tot}</span> and percentage is  <span>${per}</span> your grade is  <span>${grade}</span> you are  <span>${pF}</span>.`;
});
