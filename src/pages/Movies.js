import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MovieListItem from "../components/Movies/MovieListItem";
import Button from '../components/UI/Button';
import classes from './Movies.module.css';

const Movies = ({ title, movies }) => {
    const location = useLocation();
    const [shownMovies, setShownMovies] = useState(10);

    useEffect(() => {
        setShownMovies(10);
    }, [location]);

    const mergedMovies = [].concat(...movies);

    const loadMoreMovies = () => {
        if (shownMovies < mergedMovies.length) {
            setShownMovies(prevCount => prevCount + 10);
        } else {
            setShownMovies(10);
        }
    };

    return (
        <div className={classes.movies}>
            <div className={classes.container}>
                <h2>{title}</h2>
                <ul>
                    {mergedMovies.slice(0, shownMovies).map(movie => (
                        <MovieListItem
                            key={movie.id}
                            movieId={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            poster={movie.poster}
                            rating={movie.rating}
                            releaseDate={movie.releaseDate}
                            nowPlaying={movie.nowPlaying}
                        />
                    ))}
                </ul>
                <Button 
                    onClick={loadMoreMovies}
                >
                    {shownMovies < mergedMovies.length &&
                        'Load More'
                    }
                    {shownMovies >= mergedMovies.length &&
                        'Show Less'
                    }
                </Button>
            </div>
        </div>
    );
}

export default Movies;