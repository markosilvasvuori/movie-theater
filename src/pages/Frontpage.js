import { useState, useEffect } from 'react';

import { getMovies } from '../lib/api';
import Slideshow from "../components/Slideshow/Slideshow";
import Slider from "../components/Slider/Slider";

const Frontpage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
    const [popularMovies, setPopularMovies] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            if (!nowPlayingMovies) {
                setNowPlayingMovies(await getMovies('now_playing'));
            }
            if (!popularMovies) {
                setPopularMovies(await getMovies('popular'));
            }

            setIsLoading(false);
        }

        fetchMovies();
    }, [nowPlayingMovies, popularMovies]);

    useEffect(() => {
        console.log(nowPlayingMovies);
    }, [nowPlayingMovies]);


    return (
        <div className='page-wrapper'>
            <Slideshow />
            {!isLoading && <Slider title={'Now Playing'} movies={nowPlayingMovies} />}
            {!isLoading && <Slider title={'Popular'} movies={popularMovies} />}
        </div>
    );
}

export default Frontpage;