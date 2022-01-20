import { createContext, useState } from 'react';

export const ShowsContext = createContext();

export const ShowsProvider = (props) => {
    const storedReservedSeats = JSON.parse(localStorage.getItem('reservedSeats'));

    const hall1Size = { rows: 15, seatsInRow: 20};
    const hall2Size = { rows: 12, seatsInRow: 15};
    const hall3Size = { rows: 10, seatsInRow: 12};
    const hall4Size = { rows: 8, seatsInRow: 10};

    const [showsData, setShowsData] = useState(
        storedReservedSeats ? storedReservedSeats : {
        showDay1: [
            {
                showtimeId: 1,
                time: '14:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1007', movieTitle: ['demo_seat']},
                    {seatId: '1008', movieTitle: ['demo_seat']},
                    {seatId: '1009', movieTitle: ['demo_seat']},
                    {seatId: '1010', movieTitle: ['demo_seat']},
                    {seatId: '1011', movieTitle: ['demo_seat']},
                    {seatId: '1109', movieTitle: ['demo_seat']},
                    {seatId: '1110', movieTitle: ['demo_seat']},
                    {seatId: '0404', movieTitle: ['demo_seat']},
                    {seatId: '0412', movieTitle: ['demo_seat']},
                    {seatId: '0502', movieTitle: ['demo_seat']},
                    {seatId: '0503', movieTitle: ['demo_seat']},
                    {seatId: '0505', movieTitle: ['demo_seat']},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                showtimeId: 2,
                time: '17:15',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '0505', movieTitle: ['demo_seat']},
                    {seatId: '0506', movieTitle: ['demo_seat']},
                    {seatId: '1111', movieTitle: ['demo_seat']},
                    {seatId: '1112', movieTitle: ['demo_seat']},
                    {seatId: '1113', movieTitle: ['demo_seat']},
                    {seatId: '1215', movieTitle: ['demo_seat']},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                showtimeId: 3,
                time: '20:45',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '0410', movieTitle: ['demo_seat']},
                    {seatId: '0704', movieTitle: ['demo_seat']},
                    {seatId: '0912', movieTitle: ['demo_seat']},
                    {seatId: '0911', movieTitle: ['demo_seat']},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                showtimeId: 4,
                time: '23:30',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0810', movieTitle: ['demo_seat']},
                    {seatId: '0808', movieTitle: ['demo_seat']},
                    {seatId: '0402', movieTitle: ['demo_seat']}
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
        showDay2: [
            {
                showtimeId: 1,
                time: '14:15',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1202', movieTitle: ['demo_seat']},
                    {seatId: '0208', movieTitle: ['demo_seat']},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                showtimeId: 2,
                time: '17:30',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '0110', movieTitle: ['demo_seat']},
                    {seatId: '0111', movieTitle: ['demo_seat']},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                showtimeId: 3,
                time: '21:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '0207', movieTitle: ['demo_seat']},
                    {seatId: '0910', movieTitle: ['demo_seat']},
                    {seatId: '0610', movieTitle: ['demo_seat']},
                    {seatId: '0609', movieTitle: ['demo_seat']},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                showtimeId: 4,
                time: '23:45',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0404', movieTitle: ['demo_seat']},
                    {seatId: '0506', movieTitle: ['demo_seat']},
                    {seatId: '0205', movieTitle: ['demo_seat']},
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
        showDay3: [
            {
                showtimeId: 1,
                time: '13:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010', movieTitle: ['demo_seat']},
                    {seatId: '1208', movieTitle: ['demo_seat']},
                    {seatId: '0304', movieTitle: ['demo_seat']},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                showtimeId: 2,
                time: '16:15',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '1010', movieTitle: ['demo_seat']},
                    {seatId: '1208', movieTitle: ['demo_seat']},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                showtimeId: 3,
                time: '19:45',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '1010', movieTitle: ['demo_seat']},
                    {seatId: '0508', movieTitle: ['demo_seat']},
                    {seatId: '0608', movieTitle: ['demo_seat']},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                showtimeId: 4,
                time: '20:30',
                hall: '1',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0602', movieTitle: ['demo_seat']},
                    {seatId: '0508', movieTitle: ['demo_seat']},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                showtimeId: 5,
                time: '22:30',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '0204', movieTitle: ['demo_seat']},
                    {seatId: '0205', movieTitle: ['demo_seat']},
                    {seatId: '0607', movieTitle: ['demo_seat']},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            }
        ],
        showDay4: [
            {
                showtimeId: 1,
                time: '14:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010', movieTitle: ['demo_seat']},
                    {seatId: '1208', movieTitle: ['demo_seat']},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                showtimeId: 2,
                time: '17:30',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '0205', movieTitle: ['demo_seat']},
                    {seatId: '0404', movieTitle: ['demo_seat']},
                    {seatId: '0107', movieTitle: ['demo_seat']},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                showtimeId: 3,
                time: '21:00',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '0910', movieTitle: ['demo_seat']},
                    {seatId: '0508', movieTitle: ['demo_seat']},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            }
        ],
        showDay5: [
            {
                showtimeId: 1,
                time: '14:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010', movieTitle: ['demo_seat']},
                    {seatId: '1208', movieTitle: ['demo_seat']},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                showtimeId: 2,
                time: '17:15',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '1004', movieTitle: ['demo_seat']},
                    {seatId: '0908', movieTitle: ['demo_seat']},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                showtimeId: 3,
                time: '20:45',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '0607', movieTitle: ['demo_seat']},
                    {seatId: '0608', movieTitle: ['demo_seat']},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                showtimeId: 4,
                time: '23:30',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0103', movieTitle: ['demo_seat']},
                    {seatId: '0104', movieTitle: ['demo_seat']},
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
        showDay6: [
            {
                showtimeId: 1,
                time: '13:45',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010', movieTitle: ['demo_seat']},
                    {seatId: '1208', movieTitle: ['demo_seat']},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                showtimeId: 2,
                time: '16:00',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '1010', movieTitle: ['demo_seat']},
                    {seatId: '1208', movieTitle: ['demo_seat']},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                showtimeId: 3,
                time: '19:30',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '1007', movieTitle: ['demo_seat']},
                    {seatId: '0206', movieTitle: ['demo_seat']},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                showtimeId: 4,
                time: '22:15',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0206', movieTitle: ['demo_seat']},
                    {seatId: '0402', movieTitle: ['demo_seat']},
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
    });

    return (
        <ShowsContext.Provider value={{ showsData, setShowsData }}>
            {props.children}
        </ShowsContext.Provider>
    );
};