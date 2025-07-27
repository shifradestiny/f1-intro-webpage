function calendar() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let raceCalendar = prompt("Are you a beginner to F1?");

  raceCalendar = raceCalendar.toLowerCase();

  if (raceCalendar === "no") {
    alert(
      "Thank you " +
        name +
        "! We will forward a copy of the 2024 F1 Race Calendar to your email shortly. 😊"
    );
  } else {
    alert(
      "Thank you " +
        name +
        "! We will forward a copy of the 2024 F1 Race Calendar, along with a beginners guide to F1, to your email shortly. 😊"
    );
  }
}

let calendarButton = document.querySelector("button");
calendarButton.addEventListener("click", calendar);
