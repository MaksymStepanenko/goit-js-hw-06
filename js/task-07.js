const imputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
textEl.style.fontSize = `${imputEl.value}px`
imputEl.addEventListener('change', () => {
    textEl.style.fontSize = `${imputEl.value}px`
})