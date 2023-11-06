const container = document.getElementById("container");
const button = document.querySelector(".click-me");

button.addEventListener("mouseover", (e) => {
  const randomBoolean = Math.random() < 0.5;
  if (randomBoolean) {
    moveBtn();
  }
});

button.addEventListener("click", () => {
  moveBtn();
});

const getRandomPos = () => {
  return Math.floor(Math.random() * 101);
};

const moveBtn = () => {
  const newPositionX = getRandomPos();
  const newPositionY = getRandomPos();

  // for button not to go outside the viewport
  const maxX = 100 - (button.clientWidth / container.clientWidth) * 100;
  const maxY = 100 - (button.clientHeight / container.clientHeight) * 100;

  const newX = Math.min(maxX, newPositionX);
  const newY = Math.min(maxY, newPositionY);

  button.style.top = `${newY}%`;
  button.style.left = `${newX}%`;
};
