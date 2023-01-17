const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector(".gallery")
const markup = images.map((image) => `<li class="list"><img class="photo" src=${image.url}  height="200px" alt="${image.alt}"></li>`).join("");
console.log(markup);
ulEl.insertAdjacentHTML("beforeend", markup);

const allImgEl = document.querySelectorAll('img');
console.log(allImgEl);

ulEl.style.display = "flex";
ulEl.style.gap = "10px";
ulEl.style.listStyleType = "none";