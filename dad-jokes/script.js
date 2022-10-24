const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

async function generateJoke(){
    const config = {
        headers:{
            Accept:'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data =await res.json()
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    jokeEl.innerHTML = data.joke;
}