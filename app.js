import { fetchDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs
// render and append all dog cards to the container

window.addEventListener('load', async() => {
    const dogs = await fetchDogs();
    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);
        // render dog deetz
        dogListContainer.append(dogEl);
    }
});

