 export function searchMovie() {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
     }
    };
 fetch('https://api.themoviedb.org/3/authentication', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => {
    console.error(err);
    const resultsDiv = document.getElementById('searchResultsMovie');
    resultsDiv.innerHTML = '<p>Network error: Unable to fetch data. Please check your connection and try again.</p>';  
    if (!res.ok) {
            const resultsDiv = document.getElementById('searchResultsMovie');
            resultsDiv.innerHTML = 'Network error: Unable to fetch data. Please check your connection and try again.';
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        if (res.status === 404) {
            resultsDiv.innerHTML = '404 Error: Resource not found';
            throw new Error(`404 Error: Resource not found`);
        }
    });
    document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  const query = this.querySelector('input[type="text"]').value; 
    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, options)
    .then(res => {
        if (!res.ok) {
            const resultsDiv = document.getElementById('searchResultsMovie');
            resultsDiv.innerHTML = 'Network error: Unable to fetch data. Please check your connection and try again.';
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        if (res.status === 404) {
            const resultsDiv = document.getElementById('searchResultsMovie');
            resultsDiv.innerHTML = '404 Error: Resource not found';
            throw new Error(`404 Error: Resource not found`);
        }
        else if (error.message.includes('fetch failed')) {
            const resultsDiv = document.getElementById('searchResultsMovie');
            resultsDiv.innerHTML = `Error: fetch failed - ${error.message}`;
            throw new Error(`Fetch failed: ${error.message}`);
        }
        console.log(res);
        return res.json();

    })
    .then(data => {     
       const container = document.getElementById('ResultContainer');
        container.style.display = 'flex';
        const resultsDiv = document.getElementById('searchResultsMovie');
        const navigation = document.getElementById('navigation');
        navigation.style.display = 'block';
        resultsDiv.innerHTML = '';
        if (data.results.length === 0) {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            } 
        data.results.forEach(movie => {
                if (data.results.length === 0) {
                movieDiv.innerHTML = '<p>No results found.</p>';
            }
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
            resultsDiv.appendChild(movieDiv);
            console.log(data.results);     
        });   
    })  
    .catch(err => {
        const resultsDiv = document.getElementById('searchResultsMovie');
        resultsDiv.innerHTML = '';
        const errorDiv = document.createElement('div');

        if (err.message.includes('404' )) {
            errorDiv.textContent = '404 Error: Resource not found';
        } else if (err.message.includes('HTTP error')) {
            errorDiv.textContent = `Error: ${err.message}`;
            
        }else if (err.message.includes('fetch failed')) {
            errorDiv.textContent = `Error: fetch failed - ${err.message}`;
        } 
        else {
            errorDiv.textContent = 'Network error: Unable to fetch data. Please check your connection and try again.';
        }
        resultsDiv.appendChild(errorDiv);
        console.error(err);
    });
});
}

export function searchTV() {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
  }
};
fetch('https://api.themoviedb.org/3/authentication', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = this.querySelector('input[type="text"]').value; 
    fetch(`https://api.themoviedb.org/3/search/person?query=${encodeURIComponent(query)}`, options)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => { 
        const resultsDiv = document.getElementById('searchResultsPeople');
        resultsDiv.innerHTML = '';
                if (data.results.length === 0) {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            } 
        data.results.forEach(person => {
          const movieDiv = document.createElement('div');
            const name = document.createElement('p');
            const department = document.createElement('p');
            const knownFor = document.createElement('p');
                        const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${person.profile_path}`;
            img.alt = person.name;
            img.width = 200;
            movieDiv.classList.add('result-card');
            name.textContent = `${person.name}`;
            department.textContent = `Department: ${person.known_for_department}`;
            knownFor.textContent = `Known for: ${person.known_for.map(work => work.title || work.name).join(', ')}`;
            movieDiv.appendChild(img);
            movieDiv.appendChild(name);
            movieDiv.appendChild(department);
            movieDiv.appendChild(knownFor);     
            resultsDiv.appendChild(movieDiv);
        });
    })
    .catch(err => {
        const resultsDiv = document.getElementById('searchResultsPeople');
        resultsDiv.innerHTML = '';
        const errorDiv = document.createElement('div');
        if (err.message.includes('404')) {
            errorDiv.textContent = '404 Error: Resource not found';
        } else if (err.message.includes('HTTP error')) {
            errorDiv.textContent = `Error: ${err.message}`;
            
        }else if (err.message.includes('fetch failed')) {
            errorDiv.textContent = `Fetch Error: ${err.message}`;
            
        }
         else {
            errorDiv.textContent = 'Network error: Unable to fetch data. Please check your connection and try again.';
        }
        resultsDiv.appendChild(errorDiv);
        console.error(err);
    });
});
}
export function searchPerson() {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
  }
};
fetch('https://api.themoviedb.org/3/authentication', options)
  .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = this.querySelector('input[type="text"]').value;
    fetch(`https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}`, options)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        const resultsDiv = document.getElementById('searchResultsTV');
        resultsDiv.innerHTML = '';
                if (data.results.length === 0) {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            } 
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
    .catch(err => {
        const resultsDiv = document.getElementById('searchResultsTV');
        resultsDiv.innerHTML = '';
        const errorDiv = document.createElement('div');
        errorDiv.style.color = 'red';
        errorDiv.style.padding = '20px';
        if (err.message.includes('404')) {
            errorDiv.textContent = '404 Error: Resource not found';
        } else if (err.message.includes('HTTP error')) {
            errorDiv.textContent = `Error: ${err.message}`;
        } else {
            errorDiv.textContent = 'Network error: Unable to fetch data. Please check your connection and try again.';
        }
        resultsDiv.appendChild(errorDiv);
        console.error(err);
    });
});
}