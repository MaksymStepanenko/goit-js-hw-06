
const categoryListEl = document.querySelectorAll('ul > li.item');
console.log(`Number of categories: ${categoryListEl.length}`);

for (const item of categoryListEl) {
    const categoryEl = item.querySelector('h2');
    console.log(`Category: ${categoryEl.textContent}`);
    const numberElementsEl = item.querySelectorAll('li');
    console.log(`Elements: ${numberElementsEl.length}`);
}




// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
