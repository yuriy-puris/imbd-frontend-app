import React from 'react';

// components
import Navigation from './components/sharedComponents/Navigation';
import MovieInfo from './components/sharedComponents/MovieInfo';
import MovieInfoBar from './components/sharedComponents/MovieInfoBar';
import Actor from './components/sharedComponents/Actor';
import Grid from './components/sharedComponents/Grid';
import Spinner from './components/sharedComponents/Spinner';

// hooks
import { useMovieFetch } from './components/hooks/useMovieFetch';

const Movie = ({ movieId }) => {
    const [movie, error, loading] = useMovieFetch(movieId);
    
    if (error) return <div>Somethong was wrong ...</div>;
    if (loading) return <Spinner />;

    return (
        <>
            <Navigation link={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {
                    movie.actors.length && movie.actors.map(actor => (
                        <Actor key={actor.credit_id} actor={actor} />
                    ))
                }
            </Grid>
        </>
    )
};

export default Movie;