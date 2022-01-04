import Button from "../../UI/Button";
import classes from './BookedMovie.module.css';

const BookedMovie = ({ title, date, time, amount }) => {
    return (
        <li className={classes['booked-movie']}>
            <h4>{title}</h4>
            <div className={classes.details}>
                <p><small>{date} | {time}</small></p>
                <div className={classes.column}>
                    <p><small>Tickets: {amount}</small></p>
                    <Button>Show ticket</Button>
                </div>
            </div>
        </li>
    );
};

export default BookedMovie;