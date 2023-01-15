const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
//createElement은 js에서 html에 무언가를 만들 때 사용.

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);
//appendChild 지금 같은 경우는 document.body에서 가장 아래에 넣는 것.
//prependChild 같은 경우는 document.body에서 가장 위에 넣는 것.
