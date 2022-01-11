import { createContext, useState } from 'react';
import { getDate, prepareDate } from '../lib/helpers';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        bookedTickets: [
            {
                title: 'Spider-Man: No Way Home',
                date: prepareDate(getDate()),
                time: '17:00',
                amount: '1'
            },
            {
                title: 'Ghostbusters: Afterlife',
                date: prepareDate(getDate(true)),
                time: '14:00',
                amount: '2'
            },
            {
                title: 'The Matrix Resurrections',
                date: prepareDate(getDate(true)),
                time: '21:15',
                amount: '2'
            }
        ]
    });
    const [userBookingData, setUserBookingData] = useState({
        title: '',
        date: '',
        time: '',
        auditorium: '',
        tickets: '',
        row: '',
        seats: ''
    });

    const logOutHandler = () => {
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{
                isLoggedIn, 
                setIsLoggedIn, 
                userData, 
                setUserData, 
                logOutHandler,
                userBookingData,
                setUserBookingData
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};