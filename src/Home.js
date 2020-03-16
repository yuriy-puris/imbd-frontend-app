import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BAKDROP_SIZE } from './config';

import HeroImage from './components/sharedComponents/HeroImage';
import Grid from './components/sharedComponents/Grid';
import SearchBar from './components/sharedComponents/SearchBar';


const Home = () => {
  
  const [state, setState] = useState({ movies: []  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(state);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      setState(prev => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
      
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`)
  }, [])

  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid/>
    </>
  )
};


export default Home;