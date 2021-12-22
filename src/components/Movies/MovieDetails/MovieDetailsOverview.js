import Button from '../../UI/Button';
import classes from './MovieDetailsOverview.module.css';

const MovieDetailsOverview = ({ movieDetails }) => {
    return (
        <section className={classes['overview-section']}>
            <div className={classes.overview}>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
                <Button 
                    className={classes.button}
                    disabled={movieDetails.nowPlaying ? false : true}
                >
                    Get Tickets
                </Button>
            </div>
            <div className={classes['overview-details']}>
                <h3>Details</h3>
                <p>Release Date: {movieDetails.releaseDate}</p>
                <span className={classes.separator}>|</span>
                <p>&#9733; {movieDetails.rating}</p>
            </div>
        </section>
    );
};

export default MovieDetailsOverview;