const button = document.querySelector('.container button');
const jokeP = document.querySelector('.container p');

button.addEventListener('click', genJoke);

async function genJoke(){
    const joke = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await joke.json();
    jokeP.innerHTML = jokeObj.joke;
}
