const you = document.querySelector('.you')

you.addEventListener('click', function (event) {
    const shouldChangePage = confirm('Quieres cambiar de pagina?');
    if (!shouldChangePage) {
        event.preventDefault();

    }
});


const singupForm = document.querySelector('[name="signup"]');

singupForm.addEventListener('submit', function (event) {

    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const agree = event.currentTarget.agree.checked;
    if (name.includes('mirko')) {
        alert('sorry bro');
        event.preventDefault();
    }
});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}

singupForm.name.addEventListener('keyup', logEvent);