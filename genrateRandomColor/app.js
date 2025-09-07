function getRabColor() {
  let color = "#";
  let letters = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

let p = document.querySelector(".hexColor");
let body = document.querySelector("body");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  p.innerHTML = getRabColor();
  let bColor = p.innerHTML;
  body.style.background = bColor;
});
