const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); // 호출 당시의 현재 날짜와 시간 알려줌
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //처음은 바로 실행
setInterval(getClock, 1000); // 그 후 1초마다 계속 반복 실행
