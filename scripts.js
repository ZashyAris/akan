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

// function femaleNames() {
//   var century = parseInt(documentById("century").value | 0);
//   var year = parseInt(documentById("year").value | 0);
//   var month = parseInt(documentById("month").value | 0);
//   var date = parseInt(documentById("date").value | 0);

//   var d = newDate(century, year, month, date);
//   var yourDay = d.getDay();
//   if (yourDay == 0) {
//     document.getElementById("result").innerHTML += "Akosua";
//   }
//   if (yourDay == 1) {
//     document.getElementById("result").innerHTML += "Adwoa";
//   }
//   if (yourDay == 2) {
//     document.getElementById("result").innerHTML += "Abemaa";
//   }
//   if (yourDay == 3) {
//     document.getElementById("result").innerHTML += "Akua";
//   }
//   if (yourDay == 4) {
//     document.getElementById("result").innerHTML += "yaa";
//   }
//   if (yourDay == 5) {
//     document.getElementById("result").innerHTML += "Afua";
//   }
//   if (yourDay == 6) {
//     document.getElementById("result").innerHTML += "Ama";
//   }
// }

// function maleNames() {
//   var century = parseInt(documentById("century").value | 0);
//   var year = parseInt(documentById("year").value | 0);
//   var month = parseInt(documentById("month").value | 0);
//   var date = parseInt(documentById("date").value | 0);

//   var d = newDate(century, year, month, date);
//   var yourDay = d.getDay();
//   if (yourDay == 0) {
//     document.getElementById("result").innerHTML += "Kwasi";
//   }
//   if (yourDay == 1) {
//     document.getElementById("result").innerHTML += "Kwadwo";
//   }
//   if (yourDay == 2) {
//     document.getElementById("result").innerHTML += "Kwabena";
//   }
//   if (yourDay == 3) {
//     document.getElementById("result").innerHTML += "Kwaku";
//   }
//   if (yourDay == 4) {
//     document.getElementById("result").innerHTML += "Yaw";
//   }
//   if (yourDay == 5) {
//     document.getElementById("result").innerHTML += "Kofi";
//   }
//   if (yourDay == 6) {
//     document.getElementById("result").innerHTML += "Kwame";
//   }
// }
// if (day <= 0 || day > 31) alert("Sorry!Enter a valid day");
// else if (month < 0 || month > 12) alert("Sorry!Enter a valid month");
// else if (year < 1950 || year > 2035) alert("Sorry!Enter a valid year");
