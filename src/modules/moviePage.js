const moviePage = (movieTitle, movieYear, movieRated, movieRuntime, movieImdb, moviePoster, 
    movieDirector, movieGenre, movieActors, movieCountry, movieAwards, moviePlot
) => {
    return `
    <div class="row movie-info-return">
        <div class="col movie-info">
            <div class="col movie-title">
                <h1>${movieTitle}</h1>
            </div>
            <div class="col movie-small-info">
                <p>${movieYear}</p>
                <p>${movieRated}</p>
                <p>${movieRuntime}</p>
                <p><i class="bi bi-star"></i> ${movieImdb}/10</p>
            </div>
        </div>
        <div class="col movie-return">
            <i class="bi bi-arrow-left btn-return"></i>
        </div>
    </div>
    <div class="row movie-details">
        <div class="col movie-poster">
            <img src="${moviePoster}" alt="">
        </div>
        <div class="col movie-credits">
            <ul>
                <li>Director: ${movieDirector}</li>
                <li>Genre: ${movieGenre}</li>
                <li>Actors: ${movieActors}</li>
                <li>Country: ${movieCountry}</li>
                <li>Awards: ${movieAwards}</li>
                <li>${moviePlot}</li>
            </ul>
        </div>
    </div>
    `
}

export default moviePage;