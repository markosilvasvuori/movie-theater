import { Fragment, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { getMovieDetails } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            if (isLoading) {
                setMovieDetails(await getMovieDetails(movieId));
            }
            setIsLoading(false);
        }

        fetchMovie();
    }, [isLoading, movieId]);

    return (
        <Fragment>
            {isLoading && <LoadingSpinner />}
            {!isLoading &&
                <div>
                    <h2>{movieDetails.title}</h2>
                </div>
            }
        </Fragment>
    );
}

export default MovieDetails;