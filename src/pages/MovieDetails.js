import { Fragment, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { getMovieDetails } from '../lib/api';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import classes from './MovieDetails.module.css';

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
                <div className={classes.container}>
                    <div className={classes.backdrop} style={{ backgroundImage: `url(${movieDetails.backdrop})` }}></div>
                    <div className={classes.details}>
                        <div className={classes.info}>
                            <h2>{movieDetails.title}</h2>
                            <p>
                                <span>{movieDetails.releaseDate} | </span>
                                <span>&#9733; {movieDetails.rating}</span>
                            </p>
                            <Button className={classes.button}>Get Tickets</Button>
                        </div>
                        <img className={classes.poster} src={movieDetails.poster} alt={movieDetails.title}/>
                    </div>
                </div>
            }
            {!isLoading && 
                <section className={classes['overview-section']}>
                    <div className={classes.overview}>
                        <h3>Overview</h3>
                        <p>{movieDetails.overview}</p>
                        <Button className={classes.button}>Get Tickets</Button>
                    </div>
                    <div className={classes['overview-details']}>
                        <h3>Details</h3>
                        <p>Release Date: {movieDetails.releaseDate}<span className={classes.separator}>|</span></p>
                        <p>&#9733; {movieDetails.rating}</p>
                    </div>
                </section>
            }
        </Fragment>
    );
}

export default MovieDetails;