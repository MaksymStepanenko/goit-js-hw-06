const nameInputEl = document.getElementById('name-input');
console.log(nameInputEl)
const nameOutputEl = document.getElementById('name-output');

console.log(nameInputEl.value)
nameInputEl.addEventListener('input', () => {
    if (nameInputEl.value === '') {
        nameOutputEl.textContent = 'Anonymous';
    } else {
         nameOutputEl.textContent = nameInputEl.value
    }
   
})