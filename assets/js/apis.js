const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const userEl = document.querySelector('.user');

async function displayUser(userName) {
    userEl.textContent = 'loading...';
    const response = await fetch(`${usersEndpoint}/${userName}`);
    const data = await response.json();
    console.log(data);
    console.log(data.blog);
    console.log(data.location);
    userEl.textContent = `${data.name} - ${data.blog}`;
}

function handleError(err) {
    console.log('oh no');
    console.log(err);
    userEl.textContent = `Something went wrong: ${err}`;
}

displayUser('lucasRiveros').catch(handleError);


