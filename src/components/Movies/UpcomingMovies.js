import { Link } from 'react-router-dom';

import MovieItem from "./MovieItem";
import classes from './UpcomingMovies.module.css';

const UpcomingMovies = ({ movies }) => {
    return (
        <div className={classes['upcoming-movies']}>
            <header className={classes.header}>
                <h3>Upcoming</h3>
                <Link to='/upcoming'>View More</Link>
            </header>
            <ul>
                {movies.slice(0, 6).map(movie => (
                    <MovieItem 
                        key={movie.id}
                        movieId={movie.id}
                        title={movie.title}
                        poster={movie.poster}
                    />
                ))}
            </ul>
        </div>
    );
};

export default UpcomingMovies;