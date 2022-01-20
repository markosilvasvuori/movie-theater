import { useContext, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { ShowsContext } from '../store/shows-context';
import { UserContext } from '../store/user-context';
import Hall from '../components/Booking/Hall';
import Button from '../components/UI/Button';
import classes from './Booking.module.css';
import { useEffect } from 'react/cjs/react.development';

const Booking = () => {
    const { userBookingData, setUserBookingData, setUserData, userData } = useContext(UserContext);
    const { showsData, setShowsData } = useContext(ShowsContext);
    const [ticketsConfirmed, setTicketsConfirmed] = useState(false);
    const [ticketsStored, setTicketsStored] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    const selectedSeatsHandler = (seats) => {
        setSelectedSeats(seats);
    };

    const addReservedSeatsToContext = () => {
        const movieTitle = userBookingData.title;
        const showDay = userBookingData.showDay;
        const showtime = userBookingData.showtimeId-1;
        const showsDataCopy = {...showsData};
        const showDayCopy = showsDataCopy[showDay];
        const showtimeCopy = showDayCopy[showtime];
        const reservedSeatsCopy = showtimeCopy.reservedSeats;

        selectedSeats.map(seat => {
            return reservedSeatsCopy.push({seatId: seat, movieTitle: [movieTitle]});
        });

        setShowsData({...showsDataCopy});
    }

    const confirmTickets = () => {
        if (selectedSeats.length === 0) {
            setShowMessage(true);
            return;
        }

        const rowNumber = selectedSeats[0].substring(0, 2);
        const seatNumbers = [];

        selectedSeats.map(seat => 
            seatNumbers.push(seat.substring(2, 4))
        );

        setUserBookingData(prevData => {
            return {
                ...prevData,
                row: rowNumber,
                seats: seatNumbers,
                seatIds: selectedSeats,
            }
        });

        setUserData(prevData => {
            return {
                ...prevData,
                bookedTickets: [
                    ...prevData.bookedTickets,
                    {
                        title: userBookingData.title,
                        date: userBookingData.date,
                        time: userBookingData.time,
                        tickets: userBookingData.tickets,
                        row: rowNumber,
                        seats: seatNumbers,
                    }
                ]
            }
        });

        addReservedSeatsToContext();
        setTicketsConfirmed(true);
    };

    useEffect(() => {
        if (ticketsConfirmed) {
            localStorage.setItem('bookedTickets', JSON.stringify(userData.bookedTickets));
            localStorage.setItem('reservedSeats', JSON.stringify(showsData));
            setTicketsStored(true);
        }
    }, [ticketsConfirmed, userData.bookedTickets, showsData]);

    useEffect(() => {
        if (ticketsStored) {
            navigate('/confirmed');
        }
    }, [ticketsStored, navigate]);

    return (
        <div className={classes.container}>
            {!ticketsConfirmed &&
                <header className={classes.header}>
                    <h2>{userBookingData.title}</h2>
                    <p>{userBookingData.date}</p>
                    <p>Hall {userBookingData.hall}</p>
                </header>
            }
            {userBookingData.hall && !ticketsConfirmed &&
                <Hall 
                    hallSize={userBookingData.hallSize} 
                    movieTitle={userBookingData.title}
                    showDay={userBookingData.showDay}
                    showtimeId={userBookingData.showtimeId}
                    tickets={userBookingData.tickets}
                    onSelectSeats={selectedSeatsHandler}
                /> 
            }
            {showMessage &&
                <p className={classes.message}>Please select seats.</p>
            }
            {!ticketsConfirmed && 
                <Button 
                    className={classes.button} 
                    onClick={confirmTickets}
                >
                    Confirm Seats
                </Button>
            }
            <Outlet />
        </div>
    );
};

export default Booking;