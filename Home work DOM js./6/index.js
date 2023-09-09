// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const colorSelectors = Array.from(document.querySelectorAll('.color'));
const productImages = Array.from(document.querySelectorAll('img.shoe'));
const gradients = Array.from(document.querySelectorAll('.gradient'));
const outpriceEl = document.getElementById('outprice');

colorSelectors.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        removeActiveClass('active', colorSelectors);
        e.target.classList.add('active');

        const variant = e.target.getAttribute('color');
        const price = e.target.dataset.price;

        changeColorVariant(variant, price);
    })
})

function changeColorVariant(color, price) {
    const image = productImages.find(el => el.getAttribute('color') === color);
    const gradient = gradients.find(el => el.getAttribute('color') === color);

    removeActiveClass('show', productImages);
    removeActiveClass('second', gradients);

    image.classList.add('show');
    gradient.classList.add('second');
    outpriceEl.textContent = price;
}

function removeActiveClass(name, arr) {
    arr.forEach(el => el.classList.remove(name))
}