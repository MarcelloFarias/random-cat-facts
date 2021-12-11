const url = 'https://catfact.ninja/fact';
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
let facts;

async function getRandomFact() {
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        facts = data;
        console.log(facts);
    })
    .catch(err => console.log(err));

    output.innerHTML = `<p class="fact">${facts.fact}</p>`
}

getRandomFact();

btn.addEventListener('click', (event) => {
    event.preventDefault();
    getRandomFact();
});