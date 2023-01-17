function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const containerEl = document.querySelector('.widget');
const shangeColorBtnEl = document.querySelector('.change-color')
const colorNameEl = document.querySelector('.color')

shangeColorBtnEl.addEventListener('click', () => {
  containerEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = containerEl.style.backgroundColor
})



// function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
// function toHex(n) {
//  n = parseInt(n,10);
//  if (isNaN(n)) return "00";
//  n = Math.max(0,Math.min(n,255));
//  return "0123456789ABCDEF".charAt((n-n%16)/16)
//       + "0123456789ABCDEF".charAt(n%16);
// }