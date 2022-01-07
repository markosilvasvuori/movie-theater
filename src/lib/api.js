import { getDate } from './helpers';
import { getDateThreeMonthsAgo } from './helpers';
import NotFoundPoster from '../components/Movies/not-found.png';

export const NOW_PLAYING = `primary_release_date.gte=${getDateThreeMonthsAgo()}&primary_release_date.lte=${getDate()}`;
export const UPCOMING_MOVIES = `primary_release_date.gte=${getDate(true)}`;
const API_KEY = '93530160840d922e585f6b81bf62a7a0';
const URL_MOVIES = 'https://api.themoviedb.org/3/discover/movie?api_key=';
const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

export const getMovies = async (query, pageNumber) => {
    const response = await fetch(`${URL_MOVIES}${API_KEY}&${query}&page=${pageNumber}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Something went wrong.');
    }

    const movies = data.results.map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path ? `${POSTER_BASE_URL}${movie.poster_path}` : NotFoundPoster,
            backdrop: `${BACKDROP_BASE_URL}${movie.backdrop_path}`,
            overview: movie.overview,
            releaseDate: movie.release_date.replace(/-/g, '.'),
            rating: movie.vote_average,
        }
    });

    return movies;
};

export const getMovieDetails = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Something went wrong.');
    }

    const movieDetails = {
        id: data.id,
        title: data.title,
        poster: data.poster_path ? `${POSTER_BASE_URL}${data.poster_path}` : NotFoundPoster,
        backdrop: `${BACKDROP_BASE_URL}${data.backdrop_path}`,
        overview: data.overview,
        releaseDate: data.release_date ? data.release_date.replace(/-/g, '.') : 'Unknown',
        rating: data.vote_average,
        nowPlaying: data.release_date >= getDateThreeMonthsAgo() && data.release_date < getDate(true) ? true : false,
    }
    
    return movieDetails
};

export const searchMovies = async (searchKeyword) => {
    const response = await fetch(`${URL_SEARCH}${searchKeyword}&page=1`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Something went wrong.');
    }

    const searchResults = data.results.map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path ? `${POSTER_BASE_URL}${movie.poster_path}` : NotFoundPoster,
            backdrop: `${BACKDROP_BASE_URL}${movie.backdrop_path}`,
            overview: movie.overview,
            releaseDate: movie.release_date ? movie.release_date.replace(/-/g, '.') : 'Release Date Unknown',
            rating: movie.vote_average,
        }
    })
    
    return searchResults;
};