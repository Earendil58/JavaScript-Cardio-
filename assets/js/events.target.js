const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');


function handleClick() {
    console.log('Me cliqueaste');
}

const hooray = () => console.log('HOORAY!!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', function () {
    console.log('soy un funcion anonima');
});

//!! ESCUCHANDO MULTIPLES ITEMS

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
    const button = event.target;
    // console.log(button.textContent);
    // console.log(parseFloat(event.target.dataset.price));
    console.log('este es el target', event.target);
    console.log('este es el current', event.currentTarget);

    event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick)
})

// window.addEventListener('click', function (event) {
//     console.log('Le hiciste click al window');
//     console.log(event.target);
// })


photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function (e) {
    console.count(e.currentTarget);
})