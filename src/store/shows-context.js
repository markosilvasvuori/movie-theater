import { createContext } from 'react';

export const ShowsContext = createContext();

export const ShowsProvider = (props) => {
    const hall1Size = { rows: 15, seatsInRow: 20};
    const hall2Size = { rows: 12, seatsInRow: 15};
    const hall3Size = { rows: 10, seatsInRow: 12};
    const hall4Size = { rows: 8, seatsInRow: 10};

    const DEMO_DATA = {
        showDay1: [
            {
                id: 1,
                time: '14:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010'},
                    {seatId: '1208'},
                    {seatId: '1108'},
                    {seatId: '0508'},
                    {seatId: '0208'},
                    {seatId: '0209'},
                    {seatId: '0408'},
                    {seatId: '0910'},
                    {seatId: '0909'},
                    {seatId: '0907'},
                    {seatId: '0805'},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                id: 2,
                time: '17:15',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '0505'},
                    {seatId: '0506'},
                    {seatId: '1111'},
                    {seatId: '1112'},
                    {seatId: '1113'},
                    {seatId: '1215'},
                    {seatId: '1214'},
                    {seatId: '1209'},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                id: 3,
                time: '20:45',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '0410'},
                    {seatId: '0704'},
                    {seatId: '0912'},
                    {seatId: '0911'},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                id: 4,
                time: '23:30',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0810'},
                    {seatId: '0808'},
                    {seatId: '0402'}
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
        showDay2: [
            {
                id: 1,
                time: '14:15',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1202'},
                    {seatId: '0208'},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                id: 2,
                time: '17:30',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '0110'},
                    {seatId: '0111'},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                id: 3,
                time: '21:00',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '0207'},
                    {seatId: '0910'},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                id: 4,
                time: '23:45',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0404'},
                    {seatId: '0506'},
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
        showDay3: [
            {
                id: 1,
                time: '13:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010'},
                    {seatId: '1208'},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                id: 2,
                time: '16:15',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '1010'},
                    {seatId: '1208'},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                id: 3,
                time: '19:45',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '1010'},
                    {seatId: '0508'},
                    {seatId: '0608'},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                id: 4,
                time: '22:30',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0602'},
                    {seatId: '0508'},
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            },
            {
                id: 5,
                time: '00:45',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0204'},
                    {seatId: '0708'},
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
        showDay4: [
            {
                id: 1,
                time: '14:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010'},
                    {seatId: '1208'},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                id: 2,
                time: '17:30',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '0205'},
                    {seatId: '0404'},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                id: 3,
                time: '21:00',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '0910'},
                    {seatId: '0508'},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            }
        ],
        showDay5: [
            {
                id: 1,
                time: '14:00',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010'},
                    {seatId: '1208'},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                id: 2,
                time: '17:15',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '1004'},
                    {seatId: '0908'},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                id: 3,
                time: '20:45',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '0607'},
                    {seatId: '0608'},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                id: 4,
                time: '23:30',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0103'},
                    {seatId: '0104'},
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
        showDay6: [
            {
                id: 1,
                time: '13:45',
                hall: '1',
                hallSize: hall1Size,
                reservedSeats: [
                    {seatId: '1010'},
                    {seatId: '1208'},
                ],
                seats: hall1Size.rows * hall1Size.seatsInRow
            },
            {
                id: 2,
                time: '16:00',
                hall: '2',
                hallSize: hall2Size,
                reservedSeats: [
                    {seatId: '1010'},
                    {seatId: '1208'},
                ],
                seats: hall2Size.rows * hall2Size.seatsInRow
            },
            {
                id: 3,
                time: '19:30',
                hall: '3',
                hallSize: hall3Size,
                reservedSeats: [
                    {seatId: '1007'},
                    {seatId: '0206'},
                ],
                seats: hall3Size.rows * hall3Size.seatsInRow
            },
            {
                id: 4,
                time: '22:15',
                hall: '4',
                hallSize: hall4Size,
                reservedSeats: [
                    {seatId: '0206'},
                    {seatId: '0402'},
                ],
                seats: hall4Size.rows * hall4Size.seatsInRow
            }
        ],
    };

    /*****************************************************************************
    * 
    *   - These FOR LOOPS reduces reserved seats from halls all seats
    *     to show the amount of free seats.   
    *
    *   - Outter FOR LOOP (i) iterates through separate showDays
    *   
    *   - Inner FOR LOOP (j) iterates through show times in showDays
    * 
    *   - Example: 
    *       On first iteration:
    *       DEMO_DATA[`showDay${i}`][j] means 
    *       DEMO_DATA[first_show_day][first_show_time]
    * 
    *****************************************************************************/

    for (let i = 1; i < 7; i++) {
        for (let j = 0; j < DEMO_DATA[`showDay${i}`].length; j++) {
            DEMO_DATA[`showDay${i}`][j].seats = 
                DEMO_DATA[`showDay${i}`][j].seats - 
                DEMO_DATA[`showDay${i}`][j].reservedSeats.length;
        }
    }

    /****************************************************************************/


    return (
        <ShowsContext.Provider value={{ DEMO_DATA }}>
            {props.children}
        </ShowsContext.Provider>
    );
};