import displayMovieById from "./displayMovieById";
import card from "./card";

const returnFromStorage = (storedMovies, movieResultBody) => {
    storedMovies.forEach(item => {
        const cardElement = document.createElement('div');
        cardElement.className = "card";
        cardElement.innerHTML = card(item.Poster, item.Title, item.Year, item.imdbID);
        
        movieResultBody.appendChild(cardElement)
        displayMovieById(cardElement, movieResultBody);
    });
}

export default returnFromStorage;