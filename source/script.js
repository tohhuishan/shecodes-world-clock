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

function informAucklandTime() {
  let aucklandDateElement = document.querySelector(".auckland .date");
  let aucklandTimeElement = document.querySelector(".auckland .time");

  let aucklandCurrentDate = moment()
    .tz("Pacific/Auckland")
    .format("dddd, D MMMM YYYY");
  let aucklandCurrentTime = moment()
    .tz("Pacific/Auckland")
    .format(`hh:mm:ss [<span>]A[</span>]`);

  aucklandDateElement.innerHTML = aucklandCurrentDate;
  aucklandTimeElement.innerHTML = aucklandCurrentTime;
}

function informTime() {
  informLondonTime();
  informBangkokTime();
  informShanghaiTime();
  informAucklandTime();
}

setInterval(informTime, 1000);

function informSelectedTime(event) {
  function informSelectedCityTime() {
    if (event.target.value.length > 0) {
      let cityTimeZone = event.target.value;
      if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
      }
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];

      let selectedCurrentDate = moment()
        .tz(cityTimeZone)
        .format("dddd, D MMMM YYYY");
      let selectedCurrentTime = moment()
        .tz(cityTimeZone)
        .format(`hh:mm:ss [<span>]A[</span>]`);

      let displaySelectedTimeElement =
        document.querySelector(".displayed-cities");

      displaySelectedTimeElement.innerHTML = `              
          <div class="holder">
            <div class="d-flex justify-content-between">
              <div class="city">${cityName}</div>
              <div class="time">${selectedCurrentTime}</div>
            </div>
            <div class="date">${selectedCurrentDate}</div>
          </div>
      
      <a href="index.html">Back to home page</a>`;
    }
  }

  setInterval(informSelectedCityTime, 1000);
}

let citiesSelectElement = document.querySelector("#list-of-cities");
citiesSelectElement.addEventListener("change", informSelectedTime);
