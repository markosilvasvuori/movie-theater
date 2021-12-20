import { Link } from 'react-router-dom';

import MovieItem from "./MovieItem";
import Button from "../UI/Button";
import classes from './MovieListItem.module.css';

const MovieListIem = ({ title, overview, poster, rating, releaseDate, movieId }) => {
    return (
        <li className={classes['movie-list-item']}>
            <div className={classes.poster}>
                <MovieItem 
                    key={movieId}
                    movieId={movieId}
                    title={title}
                    poster={poster}
                />
            </div>
            <div className={classes.details}>
                <h3>{title}</h3>
                <p className={classes.overview}>{overview}</p>
                <p>&#9733; {rating} | {releaseDate}</p>
                <Link to={`/movie/${movieId}`}>
                    <Button className={classes.button}>More Info</Button>
                </Link>
            </div>
        </li>
    );
};

export default MovieListIem;