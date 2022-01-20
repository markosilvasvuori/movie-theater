import { useContext, useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { UserContext } from '../../store/user-context';
import Button from "../UI/Button";
import classes from './ShowItem.module.css';

const ShowItem = ({ showtimeId, showDay, date, title, showtime, hallNumber, hallSize, reservedSeats, seats, tickets, today }) => {
    const { setUserBookingData } = useContext(UserContext);
    const [isShowAvailable, setIsShowAvailable] = useState(true);
    const preparedDate = date.substring(date.indexOf(' ')+1);
    let freeSeats;
    let reservedSeatsCounter = 0;

    reservedSeats.map(seats => 
        seats.movieTitle.indexOf('demo_seat') !== -1 ? 
        reservedSeatsCounter++ : reservedSeatsCounter
    );

    const checkReservedSeats = () => {
        reservedSeats.map(seats => 
            seats.movieTitle.indexOf(title) !== -1 ? 
            reservedSeatsCounter++ : reservedSeatsCounter
        );
        freeSeats = seats - reservedSeatsCounter;
    };

    checkReservedSeats();

    const collectBookingData = () => {
        if (!isShowAvailable) {
            return;
        }

        setUserBookingData(prevData => {
            return {
                ...prevData,
                showDay: showDay,
                showtimeId: showtimeId,
                title: title,
                date: preparedDate,
                time: showtime,
                hall: hallNumber,
                hallSize: hallSize,
                tickets: tickets
            }
        });
    };

    useEffect(() => {
        const newDate = new Date();
        const hour = newDate.getHours();
        const minute = newDate.getMinutes();
        const currentTime = `${hour}:${minute.toString().length === 1 ? '0'+minute : minute}`;
        if (currentTime > showtime && date === today) {
            setIsShowAvailable(false);
        } else {
            setIsShowAvailable(true);
        }
    }, [date, showtime, today]);

    return (
        <li className={classes['show-item']}>
            <div>
                <p className={classes.time}>{showtime}</p>
                <p>Hall {hallNumber}</p>
            </div>
            <div>
                <p>Free seats: {freeSeats}/{seats}</p>
                {isShowAvailable &&
                    <Link 
                        to={`/booking/#top`} 
                        onClick={collectBookingData}
                    >
                        <Button>Select Show</Button>
                    </Link>
                }
                {!isShowAvailable &&
                    <Button disabled={true}>Select Show</Button>
                }
            </div>
        </li>
    );
};

export default ShowItem;