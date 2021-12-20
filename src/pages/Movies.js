import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import MovieListItem from "../components/Movies/MovieListItem";
import PaginationControls from '../components/Navigation/PaginationControls';
import classes from './Movies.module.css';

const Movies = ({ title, movies }) => {
    let { page } = useParams();
    const navigate = useNavigate();
    const [pageNumber, setPageNumber] = useState(
        isNaN(page) || Number(page) > movies.length-1 ? 0 : Number(page)
    );

    useEffect(() => {
        navigate(`../${pageNumber}`);
    }, [navigate, pageNumber]);

    const nextPage = () => {
        if (pageNumber !== movies.length - 1) {
            setPageNumber(prevPage => prevPage + 1);
        }
    };

    const previousPage = () => {
        if (pageNumber !== 0) {
            setPageNumber(prevPage => prevPage - 1);
        }
    };

    return (
        <div className={`page-wrapper ${classes.movies}`}>
            <div className={classes.container}>
                <h2>{title}</h2>
                <PaginationControls 
                    pageNumber={pageNumber} 
                    lastPage={movies.length-1} 
                    nextPage={nextPage} 
                    previousPage={previousPage}
                />
                <ul>
                    {movies[pageNumber].map(movie => (
                        <MovieListItem
                            key={movie.id}
                            movieId={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            poster={movie.poster}
                            rating={movie.rating}
                            releaseDate={movie.releaseDate}
                        />
                    ))}
                </ul>
                <PaginationControls 
                    pageNumber={pageNumber} 
                    lastPage={movies.length-1} 
                    nextPage={nextPage} 
                    previousPage={previousPage}
                />
            </div>
        </div>
    );
}

export default Movies;