import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './Slide.module.css';

const Slide = ({ title, rating, releaseDate, backdropImage, movieId}) => {
    return (
        <div className={classes.slide} style={{ backgroundImage: `url(${backdropImage})` }}>
            <div className={classes.details}>
                <h2>{title}</h2>
                <p className={classes.rating}>
                    <span>{releaseDate} | </span>
                    <span>&#9733; {rating}</span>
                </p>
                <div className={classes.links}>
                    <Button className={classes.button}>Get Tickets</Button>
                    <Link to={`/movie/${movieId}`}>More info</Link>
                </div>
            </div>
        </div>
    );
}

export default Slide;