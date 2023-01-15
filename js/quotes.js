const quotes = [
  {
    quote:
      "꿈을 품고 뭔가 할 수 있다면 그것을 시작하라. 새로운 일을 시작하는 용기 속에 당신의 천재성과 능력과 기적이 모두 숨어 있다.",
    author: "괴테",
  },
  {
    quote:
      "성공하기를 원하는가? 그렇다면 이미 개척해놓은 성공의 길이 아니라 그 누구도 가지 않는 새로운 길을 개척해야만 한다.",
    author: "로드 파머스턴",
  },
  {
    quote:
      "한 가지 뜻을 세우고, 그 길로 가라. 잘못도 있으리라. 실패도 있으리라. 그러나 다시 일어나서 앞으로 나아가라. 반드시 빛이 그대를 맞이할 것이다.",
    author: "칸트",
  },
  {
    quote: "시작하는 방법은 그만 말하고 이제 행동하는 것이다.",
    author: "월트 디즈니",
  },
  {
    quote: "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
    author: "존 록펠러",
  },
  {
    quote: "왕관을 쓰려는자 그 무게를 버텨라.",
    author: "셰익스피어",
  },
  {
    quote: "패배의 공포가 승리의 짜릿함보다 커지게 하지 마라.",
    author: "로버트 키요사키",
  },
  {
    quote:
      "실패로부터 성공을 발전시켜라. 좌절과 실패는 성공으로 가는 2가지의 가장 확실한 디딤돌이다.",
    author: "데일 카네기",
  },
  {
    quote: "운은 용기를 내는 사람의 편이다.",
    author: "베르길리우스",
  },
  {
    quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
    author: "미상",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
