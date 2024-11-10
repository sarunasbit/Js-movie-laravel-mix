const card = (moviePoster, movieTitle, movieYear, movieImdbId)=> {
    return `
        <img class="card-img-top" src="${moviePoster}" alt="${movieTitle}">
        <div class="card-body">
            <h5 class="card-title">${movieTitle}</h5>
            <p>Year: ${movieYear}</p>
            <a href="#" class="movie-id-link" id="${movieImdbId}">More...</a>
        </div>
        `
}

export default card;