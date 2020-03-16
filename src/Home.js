import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BAKDROP_SIZE } from './config';

// components
import HeroImage from './components/sharedComponents/HeroImage';
import Grid from './components/sharedComponents/Grid';
import SearchBar from './components/sharedComponents/SearchBar';

// custom hooks
import { useHomeFetch } from './components/hooks/useHomeFetch';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  
  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid/>
    </>
  )
};


export default Home;