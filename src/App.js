import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getMovies } from './lib/api';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Frontpage from './pages/Frontpage';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
    const [popularMovies, setPopularMovies] = useState(null);
    const [upcomingMovies, setUpcomingMovies] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            if (!nowPlayingMovies) {
                setNowPlayingMovies(await getMovies('now_playing'));
            }
            if (!popularMovies) {
                setPopularMovies(await getMovies('popular'));
            }
            if (!upcomingMovies) {
                setUpcomingMovies(await getMovies('upcoming'));
            }

            setIsLoading(false);
        }

        fetchMovies();
    }, [nowPlayingMovies, popularMovies]);

    return (
        <div className='page-wrapper'>
            <Header />
            {isLoading && <LoadingSpinner />}
            <Routes>
                <Route 
                    path='/' 
                    element={
                        !isLoading && 
                            <Frontpage
                                nowPlayingMovies={nowPlayingMovies} 
                                popularMovies={popularMovies} 
                                upcomingMovies={upcomingMovies}
                            />
                        } 
                />
                <Route 
                    path='/now-playing' 
                    element={
                        !isLoading && 
                        <Movies 
                            title={'Now Playing'}
                            movies={nowPlayingMovies}
                        />
                    } 
                />
                <Route 
                    path='/popular' 
                    element={
                        !isLoading && 
                        <Movies 
                            title={'Popular'}
                            movies={popularMovies}
                        />
                    } 
                />
                <Route 
                    path='/upcoming' 
                    element={
                        !isLoading && 
                        <Movies 
                            title={'Upcoming'}
                            movies={popularMovies}
                        />
                    } 
                />
                <Route path='/movie'>
                    <Route
                        path=':movieId'
                        element={
                            !isLoading &&
                            <MovieDetails />
                        }
                    />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
