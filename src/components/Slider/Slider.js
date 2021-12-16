import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieItem from '../Movies/MovieItem';
import classes from './Slider.module.css';

const Slider = ({ title, movies, categoryPage }) => {
    const slideRef = useRef();
    const [slidesPosition, setSlidesPosition] = useState(0);

    const getRemainingSlides = (nextSlide) => {
        const amountOfSlides = slideRef.current.children.length;
        let numberOfRemainingSlides = 0;
        const sliderWidth = slideRef.current.getBoundingClientRect();

        for (let i = 0; i < amountOfSlides; i++) {
            const currentSlide = slideRef.current.children[i].getBoundingClientRect();
            if (nextSlide) {
                if (sliderWidth.right <= currentSlide.right) {
                    numberOfRemainingSlides++;
                }
            }

            if (!nextSlide) {
                if (sliderWidth.right >= currentSlide.right) {
                    numberOfRemainingSlides++;
                }
            }
        }
        console.log(numberOfRemainingSlides)
        return numberOfRemainingSlides;
    }

    const moveSliderForward = () => {
        const remainingSlides = getRemainingSlides(true);
        const slideWidthWithoutMargin = slideRef.current.children[0].offsetWidth;
        const slideMarginRight = 25;
        const slideWidth = slideWidthWithoutMargin + slideMarginRight;

        let lastSlidePosition = remainingSlides * slideWidth;

        if (slidesPosition < lastSlidePosition) {
            setSlidesPosition(prevPosition => prevPosition += slideWidth);
        } else {
            setSlidesPosition(0);
        }
    };

    const moveSliderBackward = () => {
        const remainingSlides = getRemainingSlides(false);
        const slideWidthWithoutMargin = slideRef.current.children[0].offsetWidth;
        const slideMarginRight = 25;
        const slideWidth = slideWidthWithoutMargin + slideMarginRight;

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
                <Link to={`/${categoryPage}`}>View More</Link>
            </header>
            <button 
                className={classes['previous-button']} 
                onClick={moveSliderBackward}
            >
                &larr;
            </button>
            <div className={classes.slider}>
                <ul 
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
                </ul>
            </div>
            <button 
                className={classes['next-button']} 
                onClick={moveSliderForward}
            >
                &rarr;
            </button>
        </div>
    );
};

export default Slider;