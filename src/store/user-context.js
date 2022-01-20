import { createContext, useState } from 'react';

export const UserContext = createContext();

const retrieveUserData = () => {
    const storedUsername = localStorage.getItem('username');
    const storedTickets = JSON.parse(localStorage.getItem('bookedTickets'));

    return {
        username: storedUsername,
        bookedTickets: storedTickets
    }
};

export const UserProvider = (props) => {
    const storedData = retrieveUserData();
    let username;
    let bookedTickets;

    if (storedData) {
        username = storedData.username;
        bookedTickets = storedData.bookedTickets;
    }

    const [userData, setUserData] = useState({
        username: username ? username : '',
        bookedTickets: bookedTickets ? bookedTickets : []
    });
    const [userBookingData, setUserBookingData] = useState({
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

    return (
        <UserContext.Provider value={{  
                userData, 
                setUserData,
                userBookingData,
                setUserBookingData
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};