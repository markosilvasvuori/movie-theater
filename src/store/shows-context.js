import { createContext, useState, useEffect } from 'react';

export const ShowsContext = createContext();

export const ShowsProvider = (props) => {
    const DUMMY_DATA = {
        showDay1: [
            {
                id: 1,
                time: '14:00',
                auditorium: '1',
                freeSeats: '300'
            },
            {
                id: 2,
                time: '17:15',
                auditorium: '2',
                freeSeats: '278'
            },
            {
                id: 3,
                time: '20:45',
                auditorium: '3',
                freeSeats: '248'
            },
            {
                id: 4,
                time: '23:30',
                auditorium: '4',
                freeSeats: '280'
            }
        ],
        showDay2: [
            {
                id: 1,
                time: '14:15',
                auditorium: '1',
                freeSeats: '298'
            },
            {
                id: 2,
                time: '17:30',
                auditorium: '2',
                freeSeats: '275'
            },
            {
                id: 3,
                time: '21:00',
                auditorium: '3',
                freeSeats: '142'
            },
            {
                id: 4,
                time: '23:45',
                auditorium: '4',
                freeSeats: '300'
            }
        ],
        showDay3: [
            {
                id: 1,
                time: '13:00',
                auditorium: '1',
                freeSeats: '300'
            },
            {
                id: 2,
                time: '16:15',
                auditorium: '2',
                freeSeats: '265'
            },
            {
                id: 3,
                time: '19:45',
                auditorium: '3',
                freeSeats: '240'
            },
            {
                id: 4,
                time: '22:30',
                auditorium: '4',
                freeSeats: '219'
            },
            {
                id: 5,
                time: '00:45',
                auditorium: '4',
                freeSeats: '300'
            }
        ],
        showDay4: [
            {
                id: 1,
                time: '14:00',
                auditorium: '1',
                freeSeats: '299'
            },
            {
                id: 2,
                time: '17:30',
                auditorium: '2',
                freeSeats: '215'
            },
            {
                id: 3,
                time: '21:00',
                auditorium: '3',
                freeSeats: '116'
            }
        ],
        showDay5: [
            {
                id: 1,
                time: '14:00',
                auditorium: '1',
                freeSeats: '300'
            },
            {
                id: 2,
                time: '17:15',
                auditorium: '2',
                freeSeats: '278'
            },
            {
                id: 3,
                time: '20:45',
                auditorium: '3',
                freeSeats: '248'
            },
            {
                id: 4,
                time: '23:30',
                auditorium: '4',
                freeSeats: '280'
            }
        ],
        showDay6: [
            {
                id: 1,
                time: '13:45',
                auditorium: '1',
                freeSeats: '300'
            },
            {
                id: 2,
                time: '16:00',
                auditorium: '2',
                freeSeats: '278'
            },
            {
                id: 3,
                time: '19:30',
                auditorium: '3',
                freeSeats: '248'
            },
            {
                id: 4,
                time: '22:15',
                auditorium: '4',
                freeSeats: '280'
            }
        ],
    }; 
    const [userBookingData, setUserBookingData] = useState({
        title: '',
        date: '',
        time: '',
        auditorium: '',
        tickets: '',
        row: '',
        seats: ''
    });

    useEffect(() => {
        console.log(userBookingData)
    }, [userBookingData]);

    return (
        <ShowsContext.Provider value={{DUMMY_DATA, userBookingData, setUserBookingData}}>
            {props.children}
        </ShowsContext.Provider>
    );
};