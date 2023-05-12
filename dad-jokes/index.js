var jokeText = document.getElementById('joke');
var jokeBtn = document.getElementById('jokeBtn');

getJoke();

jokeBtn.addEventListener('click', getJoke);

async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    jokeText.innerText = data.joke;
}