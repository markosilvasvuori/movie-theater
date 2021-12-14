import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Frontpage from './pages/Frontpage';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path='/' element={<Frontpage />} />
                <Route 
                    path='/new' 
                    element={
                        <Movies 
                            title={'New Movies'}
                        />
                    } 
                />
                <Route 
                    path='/popular' 
                    element={
                        <Movies 
                            title={'Popular Movies'}
                        />
                    } 
                />
                <Route 
                    path='/upcoming' 
                    element={
                        <Movies 
                            title={'Upcoming Movies'}
                        />
                    } 
                />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Fragment>
    );
}

export default App;
