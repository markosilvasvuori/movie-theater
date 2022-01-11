import { useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import MovieItem from '../Movies/MovieItem';
import classes from './Slider.module.css';

const Slider = ({ title, movies, categoryPage }) => {
    const slideRef = useRef();
    const [slidesPosition, setSlidesPosition] = useState(0);

    const getRemainingSlides = (moveForward) => {
        const amountOfSlides = slideRef.current.children.length;
        const sliderWidth = slideRef.current.getBoundingClientRect();
        let numberOfRemainingSlides = 0;

        for (let i = 0; i < amountOfSlides; i++) {
            const currentSlide = slideRef.current.children[i].getBoundingClientRect();
            if (moveForward) {
                if (sliderWidth.right <= currentSlide.right) {
                    numberOfRemainingSlides++;
                }
            }

            if (!moveForward) {
                if (sliderWidth.right >= currentSlide.right) {
                    numberOfRemainingSlides++;
                }
            }
        }
        
        return numberOfRemainingSlides;
    }

    const moveSliderForward = () => {
        const remainingSlides = getRemainingSlides(true);
        const slideWidth = slideRef.current.children[0].offsetWidth;

        let lastSlidePosition = remainingSlides * slideWidth;

        if (slidesPosition < lastSlidePosition) {
            setSlidesPosition(prevPosition => prevPosition += slideWidth);
        } else {
            setSlidesPosition(0);
        }
    };

    const moveSliderBackward = () => {
        const remainingSlides = getRemainingSlides(false);
        const slideWidth = slideRef.current.children[0].offsetWidth;

        const lastSlidePosition = (slideRef.current.children.length - remainingSlides) * slideWidth;

        if (slidesPosition > 0) {
            setSlidesPosition(prevPosition => prevPosition -= slideWidth);
        } else {
            setSlidesPosition(lastSlidePosition);
        }
    };

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <h3 className={classes['slider-title']}>
                    {title}
                </h3>
                <Link to={`/${categoryPage}#top`}>
                    View More
                </Link>
            </header>
            <button 
                className={classes['previous-button']} 
                onClick={moveSliderBackward}
            >
                &lsaquo;
            </button>
            <div className={classes.slider}>
                <div 
                    ref={slideRef} 
                    className={classes.slides} 
                    style={{left: `-${slidesPosition}px`}}
                >
                    {movies.slice(0, 10).map(movie => (
                        <MovieItem 
                            key={movie.id}
                            movieId={movie.id}
                            title={movie.title}
                            poster={movie.poster}
                        />
                    ))}
                </div>
            </div>
            <button 
                className={classes['next-button']} 
                onClick={moveSliderForward}
            >
                &rsaquo;
            </button>
        </div>
    );
};

export default Slider;