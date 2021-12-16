import { Link } from 'react-router-dom';

import classes from './MovieItem.module.css';

const MovieItem = ({ title, poster, movieId }) => {
    return (
        <li className={classes.movie}>
            <Link to={`/movie/${movieId}`}>
                <img src={poster} alt={title} />
            </Link>
        </li>
    );
};

export default MovieItem;