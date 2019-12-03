var femaleNames = ["Ama", "Akosua", "Adwoa", "Abemaa", "Akua", "yaa", "Afua"];
var maleNames = ["Kwame", "kwasi", "kwadwo", "kwabena", "kwaku", "Yaw", "Kofi"];
// femaleNames[0]; // Ama

function getDayOfWeek(dd, mm, yyyy) {
  // birthdate = (16, 12, 1997)
  var day, month, yearCode, centuryCode;
  day = dd;
  month = mm;
  year = yyyy;

  if (month < 3) {
    month += 12;
    year -= 1;
  }
  yearCode = year % 100; // 97
  centuryCode = parseInt(year / 100); //19

  //   Calculate day of week from specific date
  var dayOfWeek =
    (day +
      parseInt(2.6 * (month + 1) + yearCode + parseInt(yearCode / 4) + parseInt(centuryCode / 4) + 5 * centuryCode)) %
    7;

  // dayOfWeek = (0=Saturday, 1=Sunday, 2=Monday, ...6=Friday)
  return dayOfWeek;
}

function getAkanName() {
  var form = document.forms[0];
  var century, year, month, date;

  //   century = parseInt(form.Century.value);
  year = parseInt(form.Year.value);
  month = parseInt(form.Month.value);
  date = parseInt(form.Date.value);

  var gender = form.gender.value;

  var dob = getDayOfWeek(date, month, year);
  if (gender === "female") {
    // Access akan name from femaleName
    alert(femaleNames[dob]);
  } else if (gender === "male") {
    alert(maleNames[dob]);
  }
}
