import classes from './PaginationControls.module.css';

const PaginationControls = ({ pageNumber, lastPage, nextPage, previousPage}) => {
    const previousButtonDisabled = `${pageNumber === 0 ? classes.disabled : ''}`;
    const nextButtonDisabled = `${pageNumber === lastPage ? classes.disabled : ''}`;

    return (
        <div className={classes.controls}>
            <button 
                className={`${classes.button} ${previousButtonDisabled}`} 
                onClick={previousPage}
            >
                &larr;
            </button>
            <button 
                className={`${classes.button} ${nextButtonDisabled}`} 
                onClick={nextPage}
            >
                &rarr;
            </button>
        </div>
    );
};

export default PaginationControls;