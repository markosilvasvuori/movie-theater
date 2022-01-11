import { HashLink as Link } from 'react-router-hash-link';

import classes from './MovieItem.module.css';

const MovieItem = ({ title, poster, movieId }) => {
    return (
        <div className={classes.movie}>
            <Link to={`/movie/${movieId}#top`}>
                <img src={poster} alt={title} />
            </Link>
        </div>
    );
};

export default MovieItem;