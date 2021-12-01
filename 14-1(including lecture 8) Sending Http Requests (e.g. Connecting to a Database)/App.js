import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async() =>
  {
    setIsLoading(true);
    setError(null);

    try
    {
      const response = await fetch("https://swapi.dev/api/films");
      if(!response.ok) throw new Error("Something went wrong...")
      const data = await response.json();
  
      const fetchedMovies = data.results.map(movieDate =>
      {
          return {
            id: movieDate.episode_id, 
            title: movieDate.title,
            openingText: movieDate.opening_crawl,
            releaseDate: movieDate.releaseDate
          }
      });
      setMovies(fetchedMovies);

    }
    catch(error)
    {
      setError(error.message);
    }
    setIsLoading(false);

  }, [])

  useEffect(()=> // we used useEffect so that I preview the movies once the user opens the website
  {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]) // this will make an infinite loop cause the fetchMovies method will be called
                           // every time the fetchMovies change which is done because we are using useState insinde of it
                           // so we have to use useCallback in the definition of the function
  
  let content = <p>Found no movies</p>

  if(movies.length > 0)
  {
    content = <MoviesList movies={movies} />
  }

  if(error)
  {
    content = <p>{error}</p>
  }
  
  if(isLoading) 
  {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section> {content} </section>
    </React.Fragment>
  );
}

export default App;
