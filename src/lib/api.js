const URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '93530160840d922e585f6b81bf62a7a0';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

export const getMovies = async (category) => {
    const response = await fetch(`${URL}/${category}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Something went wrong.');
    }

    const movies = data.results.map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            poster: `${POSTER_BASE_URL}${movie.poster_path}`,
            backdrop: `${BACKDROP_BASE_URL}${movie.backdrop_path}`,
            overview: movie.overview,
            releaseDate: movie.release_date,
            rating: movie.vote_average,
        }
    });
    
    return movies;
};

export const getMovieDetails = async (movieId) => {
    const response = await fetch(`${URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Something went wrong.');
    }

    const movieDetails = {
        id: data.id,
        title: data.title,
        poster: `${POSTER_BASE_URL}${data.poster_path}`,
        backdrop: `${BACKDROP_BASE_URL}${data.backdrop_path}`,
        overview: data.overview,
        releaseDate: data.releaseDate,
        rating: data.vote_average
    }
    
    return movieDetails
};