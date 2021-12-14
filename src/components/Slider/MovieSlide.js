import classes from './MovieSlide.module.css';

const MovieSlide = (props) => {
    return (
        <li className={classes.slide}>
            <img src={props.poster} alt={props.title} />
        </li>
    );
};

export default MovieSlide;