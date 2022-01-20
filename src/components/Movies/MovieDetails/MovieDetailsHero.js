import { HashLink } from 'react-router-hash-link';

import Button from '../../UI/Button';
import classes from './MovieDetailsHero.module.css';

const MovieDetailsHero = ({ movieDetails }) => {
    return (
        <div className={classes.container}>
            <div 
                className={classes.backdrop} 
                style={{ backgroundImage: `url(${movieDetails.backdrop})` }}>
            </div>
            <div className={classes.details}>
                <div className={classes.info}>
                    <h2>{movieDetails.title}</h2>
                    <p>
                        <span>{movieDetails.releaseDate} | </span>
                        <span>&#9733; {movieDetails.rating}</span>
                    </p>
                    <HashLink smooth to='#shows'>
                        <Button 
                            className={classes.button}
                            disabled={movieDetails.nowPlaying ? false : true}
                        >
                            Get Tickets
                        </Button>
                    </HashLink>
                </div>
                <img 
                    className={classes.poster} 
                    src={movieDetails.poster} 
                    alt={movieDetails.title}
                />
            </div>
        </div>
    );
};

export default MovieDetailsHero;