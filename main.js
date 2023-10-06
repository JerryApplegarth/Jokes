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
	try {
		await fetch(apiUrl + limit, options)
			.then((response) => response.json())
			.then((data) => {
				jokeEl.innerHTML = 'Updating joke...';
				btnEl.disabled = true;
				btnEl.innerHTML = 'Loading joke...';
				jokeEl.innerHTML = data[0].joke;
				btnEl.disabled = false;
				btnEl.innerHTML = 'Get Another Joke';
			});
	} catch (error) {
		jokeEl.innerHTML = error;
		jokeEl.inertHTML = 'Error';
		btnEl.innerHTML = 'Get Joke';
	}
}

btnEl.addEventListener('click', getJoke);
