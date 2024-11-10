const ajaxService = (term = null, id = null) => {
    const url = "http://www.omdbapi.com/?apikey=";
    const key = "90d54255";
    if (term) {
        return fetch (`${url}${key}&s=${term}&type=movie`)
        .then(response => response.json())
    }
    if(id) {
        return fetch (`${url}${key}&i=${id}&plot=full`)
        .then(response => response.json())
    }
}

export default ajaxService;
