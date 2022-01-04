import { HashLink as Link } from 'react-router-hash-link';

import MovieItem from "./MovieItem";
import classes from './UpcomingMovies.module.css';

const UpcomingMovies = ({ movies }) => {
    return (
        <div className={classes['upcoming-movies']}>
            <header className={classes.header}>
                <h3>Upcoming</h3>
                <Link to='/upcoming#top'>View More</Link>
            </header>
            <div className={classes.list}>
                {movies.slice(0, 6).map(movie => (
                    <MovieItem 
                        key={movie.id}
                        movieId={movie.id}
                        title={movie.title}
                        poster={movie.poster}
                    />
                ))}
            </div>
        </div>
    );
};

export default UpcomingMovies;