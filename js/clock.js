const time = document.querySelector("#clock span:first-child");
const Week = document.querySelector("#clock span:last-child");

function getClock() {
  const date = new Date(); // 호출 당시의 현재 날짜와 시간 알려줌
  const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let week = WEEKDAY[date.getDay()];
  const month = String(date.getMonth());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  Week.innerText = `${week}`;
  time.innerText = `${hours}:${minutes}`;
}

getClock(); //처음은 바로 실행
setInterval(getClock, 1000); // 그 후 1초마다 계속 반복 실행
