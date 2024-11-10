const ajaxServiceById = (id) => {
    const url = "http://www.omdbapi.com/?apikey=";
    const key = "90d54255";
    return fetch (`${url}${key}&i=${id}&plot=full`)
    .then(response => response.json())
}  

export default ajaxServiceById;