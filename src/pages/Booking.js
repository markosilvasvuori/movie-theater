import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../store/user-context';
import Hall from '../components/Booking/Hall';
import Button from '../components/UI/Button';
import classes from './Booking.module.css';

const Booking = () => {
    const { userBookingData } = useContext(UserContext);
    const navigate = useNavigate();

    if (!userBookingData.title) {
        navigate(-1);
    }

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <h2>{userBookingData.title}</h2>
                <p>{userBookingData.date}</p>
                <p>Hall {userBookingData.hall}</p>
            </header>
            {userBookingData.hall && 
                <Hall 
                    hallSize={userBookingData.hallSize} 
                    showDay={userBookingData.showDay}
                    showDayId={userBookingData.showDayId}
                    tickets={userBookingData.tickets}
                /> 
            }
            <Button className={classes.button}>
                Confirm Seats
            </Button>
        </div>
    );
};

export default Booking;