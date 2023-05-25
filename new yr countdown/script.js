const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYrs = "1 Jan 2024";

function countdown() {
  const newUYrDate = new Date(newYrs);
  const currDate = new Date();

  const totalSeconds = (newUYrDate - currDate) / 1000;
  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / (3600 * 24));
  //   console.log(currDate);
  //   console.log(seconds, minutes, hours, days);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
  //   console.log(daysEl.innerHTML);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
