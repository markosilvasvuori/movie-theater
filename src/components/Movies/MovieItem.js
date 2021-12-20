import { Link } from 'react-router-dom';

import classes from './MovieItem.module.css';

const MovieItem = ({ title, poster, movieId }) => {
    return (
        <div className={classes.movie}>
            <Link to={`/movie/${movieId}`}>
                <img src={poster} alt={title} />
            </Link>
        </div>
    );
};

export default MovieItem;