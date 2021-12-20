import { Fragment } from 'react';
import Slideshow from "../components/Slideshow/Slideshow";
import Slider from "../components/Slider/Slider";
import UpcomingMovies from '../components/Movies/UpcomingMovies';

const Frontpage = ({ nowPlayingMovies, upcomingMovies }) => {
    return (
        <Fragment>
            <Slideshow movies={nowPlayingMovies} />
            <Slider 
                title={'Now Playing'} 
                movies={nowPlayingMovies} 
                categoryPage={'now-playing/0'} 
            />
            <UpcomingMovies movies={upcomingMovies} />
        </Fragment>
    );
}

export default Frontpage;