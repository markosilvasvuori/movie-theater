import { Fragment, useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";

import { getMovieDetails } from '../lib/api';
import { AuthContext } from '../store/auth-context'; 
import MovieDetailsHero from '../components/Movies/MovieDetails/MovieDetailsHero';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import MovieDetailsOverview from '../components/Movies/MovieDetails/MovieDetailsOverview';
import Shows from '../components/Booking/Shows';
import LoginForm from '../components/User/LoginForm';
import classes from './MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const { authCtxValues } = useContext(AuthContext);
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
            {!isLoading && !authCtxValues.isLoggedIn &&
                <div id='shows' className={classes['login-container']}>
                    <h3>Login to book tickets.</h3>
                    <LoginForm />
                </div>
            }
            {!isLoading && authCtxValues.isLoggedIn &&
                <Shows 
                    showsAvailable={movieDetails.nowPlaying} 
                    movieTitle={movieDetails.title} 
                />
            }
        </Fragment>
    );
}

export default MovieDetails;