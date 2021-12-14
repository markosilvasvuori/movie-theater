import React, { useState, useRef, useEffect, useCallback } from 'react';

import Slide from './Slide';
import classes from './Slideshow.module.css';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'Movie 1'
    },
    {
        id: 'm2',
        title: 'Movie 2'
    },
    {
        id: 'm3',
        title: 'Movie 3'
    },
];

const Slideshow = () => {
    const [slidePosition, setSlidePosition] = useState(0);
    const [slideCounter, setSlideCounter] = useState(1);
    const [auto, setAuto] = useState(true);
    const slidesRef = useRef(null);

    const nextSlideHandler = useCallback(() => {
        const numberOfSlides = slidesRef.current.children.length;

        if (slideCounter < numberOfSlides) {
            setSlidePosition(prevPosition => prevPosition += 100);
            setSlideCounter(prevCount => prevCount + 1);
        } else {
            setSlidePosition(0);
            setSlideCounter(1);
        }
    }, [slideCounter]);

    const previousSlideHandler = () => {
        const numberOfSlides = slidesRef.current.children.length;

        if (slideCounter > 1) {
            setSlidePosition(prevPosition => prevPosition -= 100);
            setSlideCounter(prevCount => prevCount - 1);
        } else {
            setSlidePosition(100 * (numberOfSlides - 1));
            setSlideCounter(numberOfSlides);
        }
    };

    const autoPlayHandler = () => {
        setAuto(!auto);
    };

    useEffect(() => {
        if (auto) {
            const intervalId = setInterval(() => {
                nextSlideHandler();
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, [auto, nextSlideHandler]);

    return (
        <div 
            className={classes.slideshow} 
            onMouseEnter={autoPlayHandler} 
            onMouseLeave={autoPlayHandler}
        >
            <div 
                className={classes.slides}
                ref={slidesRef} 
                style={{left: `-${slidePosition}%`}}
            >
                {DUMMY_DATA.map(movie => (
                    <Slide 
                        key={movie.id}
                        title={movie.title}
                    />
                ))}
            </div>
            <div className={classes['slide-controls']}>
                <button
                    onClick={previousSlideHandler}
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlideHandler}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Slideshow;