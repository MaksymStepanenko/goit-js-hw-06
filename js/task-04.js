const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0
const counterValueEl = document.querySelector('span');
console.log(counterValueEl)

decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue
})

incrementBtnEl.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue
})