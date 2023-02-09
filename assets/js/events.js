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

function buyItem() {
    console.log('Comprando un Item');
}

function handleBuyButtonClick(cualquiera) {
    cualquiera.addEventListener('click', buyItem);
}


// buyButtons.forEach(handleBuyButtonClick)

buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Hiciste click');
    });
})