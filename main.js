const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
const apiKey = 'k1vXqADTLWdnbH65+EJj9Q==eElJTnIlb4mxWoCO';
const limit = '?limit=1';

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': apiKey,
	},
};

async function getJoke() {
	await fetch(apiUrl + limit, options)
		.then((response) => response.json())
		.then((data) => {
			jokeEl.innerHTML = data[0].joke;
		});
}

btnEl.addEventListener('click', getJoke);
