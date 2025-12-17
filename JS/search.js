
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYmYxYTJmZmY1MTNhNWZlYmEwZGU1ZjdhZGRlMyIsIm5iZiI6MTc2NTM2NDE3NS4xNjQsInN1YiI6IjY5Mzk1MWNmNDU5NjE4NTBiNDdmY2JjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJHrV_LEJJ8iY3SYJYjjQbvpUcJr2RRYHRutP3JaxJA'
  }
};
import { searchMovie, searchTV, searchPerson } from '/JS/main.js';
try {searchMovie();
  searchMovie();
} catch (error) {
  document.getElementById('searchResultsMovie').innerHTML = '<p style="color:red; padding:20px;">Error initializing search functionality. Please try again later.</p>';
  console.error('Error initializing searchMovie:', error);
}
try {searchTV();
  searchTV();
} catch (error) {
  document.getElementById('searchResultsTV').innerHTML = '<p style="color:red; padding:20px;">Error initializing search functionality. Please try again later.</p>';
  console.error('Error initializing searchTV:', error);
}
try {searchPerson();
  searchPerson();
} catch (error) {
  document.getElementById('searchResultsPeople').innerHTML = '<p style="color:red; padding:20px;">Error initializing search functionality. Please try again later.</p>';
  console.error('Error initializing searchPerson:', error);
}


