import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        bookedTickets: [
            {
                title: 'Spider-man',
                date: '02.01.2022',
                time: '17:00',
                amount: '2'
            },
            {
                title: 'Eternals',
                date: '17.02.2022',
                time: '18:45',
                amount: '2'
            },
            {
                title: 'Dr Strange 2',
                date: '08.05.2022',
                time: '17:45',
                amount: '2'
            }
        ]
    });

    const logOutHandler = () => {
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, userData, setUserData, logOutHandler}}>
            {props.children}
        </UserContext.Provider>
    );
};