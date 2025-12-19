
document.getElementById('PopMovies').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };
    fetch('https://api.themoviedb.org/3/movie/popular', options).then( res => {
    
    if (res.status < 300 && res.status >=200) {
            return res.json();
        }
        else {
            const resultsDiv = document.getElementById('searchResultsMovie');
            resultsDiv.innerHTML = 'Network error: Unable to fetch data. Please check your connection and try again.';
            throw new Error(`HTTP error! status: ${res.status}`);
        }
    })
        .then(data => {
            const container = document.getElementById('ResultContainer');
            container.style.display = 'flex';
            const resultsDiv = document.getElementById('searchResultsMovie');
            const navigation = document.getElementById('navigation');
            navigation.style.display = 'none';
            const hideTVResults = document.getElementById('searchResultsTV');
            hideTVResults.style
            const hidePeopleResults = document.getElementById('searchResultsPeople');
            hidePeopleResults.innerHTML = '';
            resultsDiv.innerHTML = '';
            data.results.slice(0, 10).forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('result-card');
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                img.alt = movie.title;
                img.width = 400;
                const title = document.createElement('p');
                const releaseDate = document.createElement('p');
                title.textContent = `${movie.title}`;
                releaseDate.textContent = `Release Date: ${movie.release_date}`;
                movieDiv.appendChild(img);
                movieDiv.appendChild(title);
                movieDiv.appendChild(releaseDate);
                resultsDiv.appendChild(movieDiv);
            });
        })
        .catch(err => {
            
            console.error(err);
        });

        
});

document.getElementById('TopTV').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };
    fetch('https://api.themoviedb.org/3/tv/popular', options).then( res => {
    
    if (res.status < 300 && res.status >=200) {
            return res.json();
        }
        else {
            const MovieDiv = document.getElementById('searchResultsMovie');
            MovieDiv.innerHTML = '';
            const resultsDiv = document.getElementById('searchResultsTV');
            resultsDiv.innerHTML = 'Network error: Unable to fetch data. Please check your connection and try again.';
            throw new Error(`HTTP error! status: ${res.status}`);
        }
    })
        .then(data => {
            const container = document.getElementById('ResultContainer');
            container.style.display = 'flex';
            const resultsDiv = document.getElementById('searchResultsTV');
            resultsDiv.innerHTML = '';
            const hideMovieResults = document.getElementById('searchResultsMovie');
            hideMovieResults.innerHTML = '';
            const hidePeopleResults = document.getElementById('searchResultsPeople');
            hidePeopleResults.innerHTML = '';
            const navigation = document.getElementById('navigation');
            navigation.style.display = 'none';
            data.results.slice(0, 10).forEach(tvShow => {
                const tvDiv = document.createElement('div');
                tvDiv.classList.add('result-card');
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`;
                img.alt = tvShow.name;
                img.width = 400;
                const title = document.createElement('p');
                const firstAirDate = document.createElement('p');
                title.textContent = `${tvShow.name}`;
                firstAirDate.textContent = `First Air Date: ${tvShow.first_air_date}`;
                tvDiv.appendChild(img);
                tvDiv.appendChild(title);   
                tvDiv.appendChild(firstAirDate);
                resultsDiv.appendChild(tvDiv);
            });
        })
        .catch(err => {
            const movieDiv = document.getElementById('searchResultsMovie');
            movieDiv.innerHTML = '';
            const resultsDiv = document.getElementById('searchResultsTV');
            resultsDiv.innerHTML = '';
            const errorDiv = document.createElement('div');
            errorDiv.style.color = 'red';
            errorDiv.style.padding = '20px';
            errorDiv.textContent = 'Network error: Unable to fetch data. Please check your connection and try again.';
            resultsDiv.appendChild(errorDiv);
            console.error(err);
        });
});

document.getElementById('TopMovies').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };
 fetch('https://api.themoviedb.org/3/movie/top_rated', options).then( res => {
    
    if (res.status < 300 && res.status >=200) {
            return res.json();
        }
        else {
            const resultsDiv = document.getElementById('searchResultsMovie');
            resultsDiv.innerHTML = 'Network error: Unable to fetch data. Please check your connection and try again.';
            throw new Error(`HTTP error! status: ${res.status}`);
        }
    })
        .then(data => {
            const container = document.getElementById('ResultContainer');
            container.style.display = 'flex';
            const resultsDiv = document.getElementById('searchResultsMovie');
            resultsDiv.innerHTML = '';
            const navigation = document.getElementById('navigation');
            navigation.style.display = 'none';
            const hideTVResults = document.getElementById('searchResultsTV');
            hideTVResults.innerHTML = '';
            const hidePeopleResults = document.getElementById('searchResultsPeople');
            hidePeopleResults.innerHTML = '';
            data.results.slice(0, 10).forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('result-card');
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                img.alt = movie.title;
                img.width = 400;
                const title = document.createElement('p');
                const releaseDate = document.createElement('p');
                title.textContent = `${movie.title}`;
                releaseDate.textContent = `Release Date: ${movie.release_date}`;
                movieDiv.appendChild(img);
                movieDiv.appendChild(title);
                movieDiv.appendChild(releaseDate);
                resultsDiv.appendChild(movieDiv);
            }
            );
        })
        .catch(err => {
            const resultsDiv = document.getElementById('searchResultsMovie');
            const TvDiv = document.getElementById('searchResultsTV');
            TvDiv.innerHTML = '';
            resultsDiv.innerHTML = '';
            const errorDiv = document.createElement('div');
            errorDiv.style.color = 'red';
            errorDiv.style.padding = '20px';
            errorDiv.textContent = 'Network error: Unable to fetch data. Please check your connection and try again.';
            resultsDiv.appendChild(errorDiv);
            console.error(err);
        });
});
