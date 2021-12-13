import { fetchDog, fetchDogs } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const dog = await fetchDog(id);
    const dogDetailEl = renderDogDetail(dog);
    dogDetailContainer.append(dogDetailEl);
});