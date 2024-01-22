//import 'app.css';

const apiKey = "3fc9db42"
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const results = document.getElementById('results');

// console.log(results);

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value;
    results.innerHTML = '';
    fetch(`${baseUrl}&s=${query}`)
    .then(response => response.json())
    .then(data => {
        const filmDatas = data.Search;
        filmDatas.forEach(filmData => {
            const filmfistItem = `
                <li class="film-card">
    <img src="${filmData.Poster}" alt="film poster" class="film-poster" />
    <div class="film-info">
        <h2 class="film-title">${filmData.Title}</h2>
        <p class="film-year">Year: ${filmData.Year}</p>
        <p class="film-type">Type: ${filmData.Type}</p>
    </div>
</li>`
;

        results.insertAdjacentHTML('afterbegin', filmfistItem);
        })
            
        });
        
    });
