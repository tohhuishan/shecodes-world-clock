// function informTime(event) {
//   if (event.target.value.length > 0) {
//     let currentTime = moment()
//       .tz(event.target.value)
//       .format("dddd, MMMM D, YYYY h:mm A");

//     alert(`It is ${currentTime} in ${event.target.value}`);
//   }
// }

// let selectElement = document.querySelector("#list-of-cities");
// selectElement.addEventListener("change", informTime);

function informLondonTime() {
  let londonDateElement = document.querySelector(".london .date");
  let londonTimeElement = document.querySelector(".london .time");

  let londonCurrentDate = moment()
    .tz("Europe/London")
    .format("dddd, D MMMM YYYY");
  let londonCurrentTime = moment()
    .tz("Europe/London")
    .format(`hh:mm:ss [<span>]A[</span>]`);

  londonDateElement.innerHTML = londonCurrentDate;
  londonTimeElement.innerHTML = londonCurrentTime;
}

function informShanghaiTime() {
  let shanghaiDateElement = document.querySelector(".shanghai .date");
  let shanghaiTimeElement = document.querySelector(".shanghai .time");

  let shanghaiCurrentDate = moment()
    .tz("Asia/Shanghai")
    .format("dddd, D MMMM YYYY");
  let shanghaiCurrentTime = moment()
    .tz("Asia/Shanghai")
    .format(`hh:mm:ss [<span>]A[</span>]`);

  shanghaiDateElement.innerHTML = shanghaiCurrentDate;
  shanghaiTimeElement.innerHTML = shanghaiCurrentTime;
}

function informBangkokTime() {
  let bangkokDateElement = document.querySelector(".bangkok .date");
  let bangkokTimeElement = document.querySelector(".bangkok .time");

  let bangkokCurrentDate = moment()
    .tz("Asia/Bangkok")
    .format("dddd, D MMMM YYYY");
  let bangkokCurrentTime = moment()
    .tz("Asia/Bangkok")
    .format(`hh:mm:ss [<span>]A[</span>]`);

  bangkokDateElement.innerHTML = bangkokCurrentDate;
  bangkokTimeElement.innerHTML = bangkokCurrentTime;
}

function informTime() {
  informLondonTime();
  informShanghaiTime();
  informBangkokTime();
}

setInterval(informTime, 1000);
