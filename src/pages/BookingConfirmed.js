import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../store/user-context';
import Button from '../components/UI/Button';
import classes from './Booking.module.css';

const BookingConfirmed = () => {
    const { setUserBookingData } = useContext(UserContext);

    useEffect(() => {
        setUserBookingData({
            title: '',
            date: '',
            time: '',
            hall: '',
            tickets: '',
            row: '',
            seats: '',
            seatIds: [],
            showtimeId: '',
        });
    }, [setUserBookingData]);

    return (
        <div className={classes.confirmed}>
            <p>Tickets booked successfully!</p>
            <Link to='/userpage'>
                <Button>View your tickets</Button>
            </Link>
        </div>
    );
};

export default BookingConfirmed;