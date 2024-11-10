const ajaxServiceByTitle = (term) => {
    const url = "http://www.omdbapi.com/?apikey=";
    const key = "90d54255";
    return fetch (`${url}${key}&s=${term}&type=movie`)
    .then(response => response.json())
}

export default ajaxServiceByTitle;
