import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, API_BASE_URL, SEARCH_BASE_URL, POPULAR_BASE_URL, POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from './config';

// components
import HeroImage from './components/sharedComponents/HeroImage';
import Grid from './components/sharedComponents/Grid';
import SearchBar from './components/sharedComponents/SearchBar';
import Spinner from './components/sharedComponents/Spinner';
import MovieThumb from './components/sharedComponents/MovieThumb';
import LoadMoreBtn from './components/sharedComponents/LoadMoreBtn';

// custom hooks
import { useHomeFetch } from './components/hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [
    { 
      state: { movies, currentPage, totalPages, heroImage }, 
      loading, 
      error 
    },
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const loadMoreMovies = () => {
    const searchEndPoint = `${SEARCH_BASE_URL}&query=${searchTerm}&page=${currentPage + 1}`;
    const popularEndPoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`

    const endPoint = searchTerm ? searchEndPoint : popularEndPoint;
    fetchMovies(endPoint);
  }
  
  const searchMovies = search => {
    const endPoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endPoint);
  };

  if ( error ) return <div>Something wrong ...</div>
  if ( !movies.length ) return <Spinner />

  return (
    <> 
      { !searchTerm && (
        <HeroImage 
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? 'Search result' : 'Popular movie'}>
        {
          movies.map(movie => (
            <MovieThumb 
              key={movie.id}
              image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
              movieId={movie.id}
              movieName={movie.original_title}
              clickable
            />
          ))
        }
      </Grid>
      { loading && <Spinner/> }
      { currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load more" callback={loadMoreMovies} />
      )}
    </>
  )
};


export default Home;