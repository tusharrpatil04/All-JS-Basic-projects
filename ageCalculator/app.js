//Age Calculator -->
let calAgeBtn = document.querySelector("button");
let dobInput = document.querySelector("input");
let res = document.querySelector("p");

calAgeBtn.addEventListener("click", () => {
  let dobValue = dobInput.value;

  const birthDate = new Date(dobValue);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let day = today.getDate() - birthDate.getDate();

  if (day < 0) {
    monthDiff--;
    let prevMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    day += prevMonthDays;
  }

  if (monthDiff < 0) {
    age--;
    monthDiff += 12;
  }

  res.innerHTML = `You are <span>${age}</span> years, <span>${monthDiff}</span> months and <span>${day}</span> days old.`;
});
