import ajaxServiceById from "./ajaxServiceById";
import moviePage from "./moviePage";
import returnFromStorage from "./returnFromStorage";
import calcTime from "./calcTime";

const displayMovieById = (cardTargetId, movieResultBody) => {
    //Catches the id of <a> element and displays only one movie with plot=full details
    cardTargetId.querySelector('.movie-id-link').addEventListener('click', async (movieId)=> {
        const singleMovieBody = document.querySelector('.single-movie-info');
        movieId.preventDefault();
        //Id target
        const getMovieId = movieId.target.id;
        let m = await ajaxServiceById(getMovieId);
        if(m.Response == 'True') {
            if(m.Poster == 'N/A') {
                m.Poster = `/src/scss/img/No_Image_Available.jpg`
            }
            //Creates the id
            singleMovieBody.innerHTML = moviePage(m.Title,m.Year, calcTime(m.Runtime), m.Rated, m.imdbRating, m.Poster, m.Director
                ,m.Genre, m.Actors, m.Country, m.Awards,m.Plot)
        }
        //Clean the search body
        movieResultBody.innerHTML = ``;

        //If return clicked, clear html of single movie, get stored movie objects and calls function to display it
        document.querySelector('.btn-return').addEventListener('click', ()=> {
            singleMovieBody.innerHTML = ``;
            const storedMovies = JSON.parse(localStorage.getItem('movieStorage'));
            
            returnFromStorage(storedMovies, movieResultBody)
            
        })
    })
}

export default displayMovieById;