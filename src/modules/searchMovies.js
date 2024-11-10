import ajaxService from "./ajaxService";
import displayMovieById from "./displayMovieById";
import card from "./card";


const searchMovie= () => {
    document.querySelector('.input-button').addEventListener('click', async () => {
        const movieResultBody = document.querySelector('main article .card-container') 
        const searchMovieInput = document.querySelector('.input-bar').value;
        const singleMovieBody = document.querySelector('.single-movie-info');
        let searchResult = await ajaxService(searchMovieInput, null);
        //Clean both html and single movie html
        movieResultBody.innerHTML = ``;
        singleMovieBody.innerHTML = ``;
        //Search for result and input to storage search results, returns limited details year, title, imdbid
        if(searchResult.Response == "True" && searchResult.Search){
            //Store the results and on every search changes the object
            localStorage.setItem('movieStorage', JSON.stringify(searchResult.Search));
            movieResultBody.innerHTML = ``;
            searchResult.Search.forEach(movie => {
                if(movie.Poster == 'N/A') {
                    movie.Poster = `/src/scss/img/No_Image_Available.jpg`
                }
                const cardElement = document.createElement('div');
                cardElement.className = "card";
                cardElement.innerHTML = card(movie.Poster, movie.Title, movie.Year, movie.imdbID);
                
                movieResultBody.appendChild(cardElement)
                //Display one result with more details, fetches the url with plot=full details, catches the imdbid id on <a> element
                displayMovieById(cardElement, movieResultBody);
            });
        } else{
            const cardElement = document.createElement('h1');
            cardElement.innerText = `Nerasta`;
            movieResultBody.appendChild(cardElement);
        }
    })
}

export default searchMovie;

