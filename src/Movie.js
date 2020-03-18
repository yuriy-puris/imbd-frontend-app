import React from 'react';

// components
import Navigaion from './components/sharedComponents/Navigation';
import MovieInfo from './components/sharedComponents/MovieInfo';
import MovieInfoBar from './components/sharedComponents/MovieInfoBar';
import Actor from './components/sharedComponents/Actor';
import Grid from './components/sharedComponents/Grid';
import Spinner from './components/sharedComponents/Spinner';

const Movie = ({ movieId }) => (
    <>
        <Navigaion />
        <MovieInfo />
        <MovieInfoBar />
        <Grid>
            <Actor />
        </Grid>
        <Spinner />
    </>
);

export default Movie;