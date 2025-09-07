let date = document.querySelector("h1");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let today = new Date();

let currentDate = today.getDate();

let currentDayName = today.toLocaleString("en-US", { weekday: "long" });

let currentMonth = today.toLocaleDateString("en-US", { month: "long" });

let currentYear = today.getFullYear();

date.innerText = currentDate;
day.innerText = currentDayName;
month.innerText = currentMonth;
year.innerText = currentYear;
