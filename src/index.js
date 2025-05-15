//Challenge 1
//Copy moment.js and moment time zone and paste on HTML head

//Challenge 2
let currentDateElement = document.querySelector("#current-date");
let currentDate = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY h:mm A");
currentDateElement.innerHTML = `It is ${currentDate} in Honolulu, Hawaii`;

//Challenge 3
let futureDateElement = document.querySelector("#future-date");
let futureDate = moment()
  .add(10, "years")
  .tz("Europe/Paris")
  .format("dddd, MMMM D, YYYY h:mm A");
futureDateElement.innerHTML = `10 years from now, it will be ${futureDate} in Paris, France`;

//Challenge 4
let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local-time-zone");
localElement.innerHTML = `Your current time zone is ${localTimezone} and the current time is ${moment().format(
  "h:m A"
)}`;
