function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const body = document.querySelector('.body');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const bodyElement = document.querySelector('.widget');

btn.addEventListener("click", () => {

  const newColor = getRandomHexColor();
 
  bodyElement.style.backgroundColor = newColor;
  return color.textContent = newColor;
});


