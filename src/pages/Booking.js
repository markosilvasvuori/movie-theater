import { Fragment, useContext } from 'react';

import { ShowsContext } from '../store/shows-context';
import Auditorium from '../components/Booking/Auditorium';

const Booking = () => {
    const { userBookingData } = useContext(ShowsContext);

    return (
        <Fragment>
            <h2>{userBookingData.title}</h2>
            <p>Auditorium {userBookingData.auditorium}</p>
            <Auditorium />
        </Fragment>
    );
};

export default Booking;