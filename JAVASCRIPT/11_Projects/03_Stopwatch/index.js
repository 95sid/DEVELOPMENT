function msToTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
let startTime = 0;
let elapsedTime = 0;
let intervalid;
function startTimer() {
  startTime = Date.now() - elapsedTime;
  intervalid = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.querySelector(".timer").textContent = msToTime(elapsedTime);
  }, 10);
  document.querySelector(".stop").disabled = false;
  document.querySelector(".start").disabled = true;
}
function stopTimer() {
  clearInterval(intervalid);
  document.querySelector(".stop").disabled = true;
  document.querySelector(".start").disabled = false;
}
function resetTimer() {
  clearInterval(intervalid);
  elapsedTime = 0;
  document.querySelector(".timer").textContent = "00:00:00";
  document.querySelector(".stop").disabled = false;
  document.querySelector(".start").disabled = false;
}
document.querySelector(".start").addEventListener("click", startTimer);
document.querySelector(".stop").addEventListener("click", stopTimer);
document.querySelector(".reset").addEventListener("click", resetTimer);
