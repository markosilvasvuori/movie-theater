import MovieItem from "../components/Movies/MovieItem";
import classes from './Movies.module.css';

const Movies = ({ title, movies }) => {
    return (
        <div className={`page-wrapper ${classes.movies}`}>
            <h2>{title}</h2>
            <ul>
                {movies.map(movie => (
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
}

export default Movies;