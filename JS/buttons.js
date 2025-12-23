
document.getElementById('PopMovies').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };
    // Fetch popular movies
    fetch('https://api.themoviedb.org/3/movie/popular', options).then( res => { 
    if (res.status < 300 && res.status >=200) {
            return res.json();
        }
        else {
            const resultsDiv = document.getElementById('searchResultsMovie');
            resultsDiv.style.display = 'flex';
            resultsDiv.innerHTML = 'Network error: Unable to fetch data. Please check your connection and try again.';
            throw new Error(`HTTP error! status: ${res.status}`);
        }
    })
    // display results
        .then(data => {
            const container = document.getElementById('ResultContainer');
            container.style.display = 'flex';
            const resultsDiv = document.getElementById('searchResultsMovie');
            const navigation = document.getElementById('navigation');
            navigation.style.display = 'none';
            const hideTVResults = document.getElementById('searchResultsTV');
            hideTVResults.innerHTML = '';
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
        // error handling
        .catch(err => {
                 const movieDiv = document.getElementById('ResultContainer');
                 movieDiv.style.display = 'flex';
            movieDiv.innerHTML = '';
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Network error: Unable to fetch data. Please check your connection and try again.';
            movieDiv.appendChild(errorDiv);
            console.error(err);
        });

        
});
// Top Rated TV Shows button functionality
document.getElementById('TopTV').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };
    // Fetch popular TV shows
    fetch('https://api.themoviedb.org/3/tv/popular', options).then( res => {
    
    if (res.status < 300 && res.status >=200) {
            return res.json();
        }
        else {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
    })
    // display results
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
        // error handling
        .catch(err => {
                 const movieDiv = document.getElementById('ResultContainer');
                 movieDiv.style.display = 'flex';
            movieDiv.innerHTML = '';
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Network error: Unable to fetch data. Please check your connection and try again.';
            movieDiv.appendChild(errorDiv);
            console.error(err);
        });
});
// Top Rated Movies button functionality
document.getElementById('TopMovies').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };
    // Fetch top rated movies
 fetch('https://api.themoviedb.org/3/movie/top_rated', options).then( res => {
    if (res.status < 300 && res.status >=200) {
            return res.json();
        }
        else {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
    })
                // display results
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
        // error handling
        .catch(err => {
                 const movieDiv = document.getElementById('ResultContainer');
                 movieDiv.style.display = 'flex';
            movieDiv.innerHTML = '';
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Network error: Unable to fetch data. Please check your connection and try again.';
            movieDiv.appendChild(errorDiv);
            console.error(err);
        });
});
