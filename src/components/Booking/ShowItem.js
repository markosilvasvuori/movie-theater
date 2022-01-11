import { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { UserContext } from '../../store/user-context';
import Button from "../UI/Button";
import classes from './ShowItem.module.css';

const ShowItem = ({ id, showDay, date, title, showTime, hallNumber, hallSize, seats, tickets }) => {
    const { setUserBookingData } = useContext(UserContext);
    const totalSeats = hallSize.rows * hallSize.seatsInRow;
    const preparedDate = date.substring(date.indexOf(' ')+1);

    const collectBookingData = () => {
        setUserBookingData(prevData => {
            return {
                ...prevData,
                showDay: showDay,
                showDayId: id,
                title: title,
                date: preparedDate,
                time: showTime,
                hall: hallNumber,
                hallSize: hallSize,
                tickets: tickets
            }
        });
    };

    return (
        <li className={classes['show-item']}>
            <div>
                <p className={classes.time}>{showTime}</p>
                <p>Hall {hallNumber}</p>
            </div>
            <div>
                <p>Free seats: {seats}/{totalSeats}</p>
                <Link 
                    to={`/booking/${id}#top`} 
                    onClick={collectBookingData}
                >
                    <Button>Select Show</Button>
                </Link>
            </div>
        </li>
    );
};

export default ShowItem;