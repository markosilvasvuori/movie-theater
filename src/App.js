import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getMovies, NOW_PLAYING, UPCOMING_MOVIES } from './lib/api';
import Modal from './components/UI/Modal';
import LoginFormForModal from './components/User/LoginFormForModal'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Frontpage from './pages/Frontpage';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
    const [upcomingMovies, setUpcomingMovies] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            if (!nowPlayingMovies) {
                setNowPlayingMovies([ 
                    await getMovies(NOW_PLAYING, 1), 
                    await getMovies(NOW_PLAYING, 2)
                ]);
            }
            if (!upcomingMovies) {
                setUpcomingMovies([
                    await getMovies(UPCOMING_MOVIES, 1),
                    await getMovies(UPCOMING_MOVIES, 2),
                    await getMovies(UPCOMING_MOVIES, 3),
                    await getMovies(UPCOMING_MOVIES, 4)
                ]);
            }

            setIsLoading(false);
        }

        fetchMovies();
    }, [nowPlayingMovies, upcomingMovies]);

    const modalHandler = () => {
        setShowModal(!showModal);
    };

    return (
        <div className='page-wrapper'>
            {showModal &&
                <Modal title={'Login'} onClick={modalHandler}>
                    <LoginFormForModal onClick={modalHandler} />
                </Modal>
            }
            <Header onShowModal={modalHandler} />
            {isLoading && <LoadingSpinner />}
            <Routes>
                <Route 
                    path='/' 
                    element={
                        !isLoading && 
                            <Frontpage
                                nowPlayingMovies={nowPlayingMovies[0]} 
                                upcomingMovies={upcomingMovies[0]}
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
                    path='/upcoming'
                    element={
                        !isLoading && 
                        <Movies 
                            title={'Upcoming'}
                            movies={upcomingMovies}
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
                <Route path='/search'>
                    <Route 
                        path=':searchKeyword'
                        element={
                            !isLoading &&
                            <SearchPage />
                        }
                    />
                </Route>
                <Route 
                    path='*' 
                    element={<NotFound />} 
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
