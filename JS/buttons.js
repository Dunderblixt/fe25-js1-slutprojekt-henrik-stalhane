
document.getElementById('PopMovies').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };
    fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then(res => res.json())
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
            data.results.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('result-card');
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                img.alt = movie.title;
                img.width = 200;
                const title = document.createElement('p');
                const overview = document.createElement('p');
                const releaseDate = document.createElement('p');
                title.textContent = `${movie.title}`;
                overview.textContent = `${movie.overview}`;
                releaseDate.textContent = `Release Date: ${movie.release_date}`;
                movieDiv.appendChild(img);
                movieDiv.appendChild(title);
                movieDiv.appendChild(overview);
                movieDiv.appendChild(releaseDate);
                resultsDiv.appendChild(movieDiv);
            });
        })
        .catch(err => console.error(err));
});

document.getElementById('TopTV').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };
    fetch('https://api.themoviedb.org/3/tv/popular', options)
        .then(res => res.json())
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
            data.results.forEach(tvShow => {
                const tvDiv = document.createElement('div');
                tvDiv.classList.add('result-card');
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`;
                img.alt = tvShow.name;
                img.width = 200;
                const title = document.createElement('p');
                const overview = document.createElement('p');
                const firstAirDate = document.createElement('p');
                title.textContent = `${tvShow.name}`;
                overview.textContent = `${tvShow.overview}`;
                firstAirDate.textContent = `First Air Date: ${tvShow.first_air_date}`;
                tvDiv.appendChild(img);
                tvDiv.appendChild(title);   
                tvDiv.appendChild(overview);
                tvDiv.appendChild(firstAirDate);
                resultsDiv.appendChild(tvDiv);
            });
        })
        .catch(err => console.error(err));
});

document.getElementById('TopMovies').addEventListener('click', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
        }
    };      
    fetch('https://api.themoviedb.org/3/movie/top_rated', options)
        .then(res => res.json())
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
            data.results.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('result-card');
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                img.alt = movie.title;
                img.width = 200;
                const title = document.createElement('p');
                const overview = document.createElement('p');
                const releaseDate = document.createElement('p');
                title.textContent = `${movie.title}`;
                overview.textContent = `${movie.overview}`;
                releaseDate.textContent = `Release Date: ${movie.release_date}`;
                movieDiv.appendChild(img);
                movieDiv.appendChild(title);
                movieDiv.appendChild(overview);
                movieDiv.appendChild(releaseDate);
                resultsDiv.appendChild(movieDiv);
            }
            );
        })
        .catch(err => console.error(err));
});
