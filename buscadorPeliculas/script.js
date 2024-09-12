let searchButton = document.getElementById('searchButton');
let results = document.getElementById('results');
let searchInput = document.getElementById('searchInput');

let url_base = 'https://api.themoviedb.org/3/search/movie'
let api_key = '4a9f0a9ab4c5cdffb2337589aee46925';


const searchMovies = () => {
    results.textContent = '';
    results.style.display = 'block';

    if (searchInput.value.trim() === '') {
        results.innerHTML = `<h3>Por favor, ingrese un término de búsqueda</h3>`;
        results.style.color = 'white';
        results.querySelector('h3').style.textAlign = 'center';
        results.querySelector('h3').style.fontWeight = 'bold';
        return;
    }

    let stateSearch = document.createElement('h3');
    stateSearch.textContent = 'Cargando...';
    stateSearch.style.color = 'white';
    stateSearch.style.textAlign = 'center';
    results.appendChild(stateSearch);
    fetch(`${url_base}?query=${searchInput.value}&api_key=${api_key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            if(json.results.length > 0) {
                results.removeChild(stateSearch);
                json.results.forEach(movie => {
                    let movieImg = document.createElement('img');
                    let movieTitle = document.createElement('h4');
                    let releaseDate = document.createElement('p');
                    let overview = document.createElement('p');
                    let movieDiv = document.createElement('div');
                    movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    movieTitle.textContent = movie.title;
                    releaseDate.textContent = `Release: ${movie.release_date}`;
                    overview.textContent = movie.overview;
                    movieDiv.appendChild(movieImg);
                    movieDiv.appendChild(movieTitle);
                    movieDiv.appendChild(releaseDate);
                    movieDiv.appendChild(overview);
                    movieDiv.classList.add('movie');
                    results.appendChild(movieDiv);
                });
            } else {
                stateSearch.textContent = 'No se ha encontrado la película solicitada';
            }
        })
        .catch(error => {
            stateSearch.textContent = `Ocurrió un error: ${error.message}`;
            stateSearch.style.color = 'white';
            console.error(error);
})
}
searchButton.addEventListener('click', searchMovies);