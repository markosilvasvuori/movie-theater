import classes from './Seat.module.css';

const Seat = ({ id, reserved, onSelect, children }) => {
    const styles = `${classes.seat} ${reserved ? classes.reserved : ''}`;

    const selectHandler = (event) => {
        onSelect(event.target);
    }

    return (
        <li 
            id={id} 
            className={styles}
            onClick={selectHandler}
        >
            {children}
        </li>
    );
};

export default Seat;