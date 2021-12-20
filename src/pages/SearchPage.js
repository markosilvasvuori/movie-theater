import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { searchMovies } from '../lib/api';
import MovieListItem from '../components/Movies/MovieListItem';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import classes from './Movies.module.css';

const Search = () => {
    const { searchKeyword } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [searchResults, setSearchResults] = useState(null);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }, [keyword, searchKeyword]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (isLoading) {
                setSearchResults(await searchMovies(searchKeyword));
            }
            setIsLoading(false);
        }

        fetchMovieDetails();
    }, [isLoading, searchKeyword]);

    return (
        <div className={`page-wrapper ${classes.movies}`}>
            {isLoading && <LoadingSpinner />}
            {!isLoading &&
                <div className={classes.container}>
                    <h2>Search Results</h2>
                    <ul>
                        {searchResults.map(movie => (
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
                </div>
            }
        </div>
    );
};

export default Search;