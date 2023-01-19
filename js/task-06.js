const inputEl = document.getElementById('validation-input');
console.log(getAttribute(data-length));
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === getAttribute(length)) {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')

} else {
    inputEl.classList.add('invalid')
    inputEl.classList.remove('valid')
}
})
