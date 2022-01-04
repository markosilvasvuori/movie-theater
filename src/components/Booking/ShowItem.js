import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ShowsContext } from '../../store/shows-context';
import Button from "../UI/Button";
import classes from './ShowItem.module.css';

const ShowItem = ({ id, title, showTime, auditoriumNumber, freeSeats, tickets }) => {
    const { setUserBookingData } = useContext(ShowsContext);

    const collectBookingData = () => {
        setUserBookingData(prevData => {
            return {
                ...prevData,
                title: title,
                date: '',
                time: showTime,
                auditorium: auditoriumNumber,
                tickets: tickets
            }
        });
    };

    return (
        <li className={classes['show-item']}>
            <div>
                <p className={classes.time}>{showTime}</p>
                <p>Auditorium {auditoriumNumber}</p>
            </div>
            <div>
                <p>Free seats: {freeSeats}/300</p>
                <Link to={`/booking/${id}`} onClick={collectBookingData}>
                    <Button>Select Show</Button>
                </Link>
            </div>
        </li>
    );
};

export default ShowItem;