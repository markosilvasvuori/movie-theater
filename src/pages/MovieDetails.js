import { Fragment, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { getMovieDetails } from '../lib/api';
import MovieDetailsHero from '../components/Movies/MovieDetails/MovieDetailsHero';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import MovieDetailsOverview from '../components/Movies/MovieDetails/MovieDetailsOverview';
import Shows from '../components/Booking/Shows';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (isLoading) {
                setMovieDetails(await getMovieDetails(movieId));
            }
            setIsLoading(false);
        }

        fetchMovieDetails();
    }, [isLoading, movieId]);

    return (
        <Fragment>
            {isLoading && <LoadingSpinner />}
            {!isLoading &&
                <MovieDetailsHero movieDetails={movieDetails} />
            }
            {!isLoading && 
                <MovieDetailsOverview movieDetails={movieDetails} />
            }
            {!isLoading && 
                <Shows 
                    showsAvailable={movieDetails.nowPlaying} 
                    movieTitle={movieDetails.title} 
                />
            }
        </Fragment>
    );
}

export default MovieDetails;