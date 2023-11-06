function calculateAge() {
  const dayInput = document.getElementById("days");
  const monthInput = document.getElementById("months");
  const yearInput = document.getElementById("years");

  // Ensure day and month have leading zeros
  dayInput.value = dayInput.value.padStart(2, "0");
  monthInput.value = monthInput.value.padStart(2, "0");

  // Get user input for day, month, and year
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Month is zero-based
  const currentDay = currentDate.getDate();

  // Calculate age
  let ageYears = currentYear - year;
  let ageMonths = currentMonth - month;
  let ageDays = currentDay - day;

  // Adjust for negative age
  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += 30; // Assuming a month has 30 days
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  // Display the result
  document.getElementById("years-result").textContent = ageYears;
  document.getElementById("months-result").textContent = ageMonths;
  document.getElementById("days-result").textContent = ageDays;

  // Ensure the span remains
  document.getElementById(
    "years-result"
  ).innerHTML = `${ageYears} <span class="result-text">years</span>`;
  document.getElementById(
    "months-result"
  ).innerHTML = `${ageMonths} <span class="result-text">months</span>`;
  document.getElementById(
    "days-result"
  ).innerHTML = `${ageDays} <span class="result-text">days</span>`;
}
