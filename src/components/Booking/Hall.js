import { useContext } from 'react';

import { ShowsContext } from '../../store/shows-context';
import Seat from './Seat';
import classes from './Hall.module.css';

const Hall = ({ hallSize, showDay, showDayId, tickets }) => {
    const { DEMO_DATA } = useContext(ShowsContext);
    const numberOfRows = hallSize.rows;
    const seatsInRow = hallSize.seatsInRow;

    const checkForReserverdSeats = (seatId) => {
        const showDayToCheck = DEMO_DATA[showDay];
        let showtimeToCheck = null;
        
        for (let i = 0; i < showDayToCheck.length; i++) {
            if (showDayToCheck[i].id === showDayId) {
                showtimeToCheck = showDayToCheck[i];
            }
        }

        for (let i = 0; i < showtimeToCheck.reservedSeats.length; i++) {
            if (showtimeToCheck.reservedSeats[i].seatId === seatId ) {
                return true;
            }
        }
    }

    const selectSeatHandler = (seat) => {
        const parent = seat.parentNode;
        const allRows = parent.parentNode.children;
        let selectedSeat = seat;
        let counter = 0;

        // Reset all selections
        for (let i = 0; i < allRows.length; i++) {
            let row = allRows[i];

            for (let j = 1; j < row.children.length-1; j++) {
                let seat = row.children[j];
                seat.classList.remove(classes['selected-seat']);
            }
        }

        while (tickets > counter) {
            selectedSeat.classList.add(classes['selected-seat']);
            selectedSeat = selectedSeat.nextSibling;
            counter++;
        }
    };

    const createSeats = (row) => {
        const seats = [];
        for (let i = 1; i <= seatsInRow; i++) {
            const rowNumber = row.toString().length === 1 ? `0${row}` : row;
            const seatNumber = i.toString().length === 1 ? `0${i}` : i;
            const seatId = `${rowNumber}${seatNumber}`;
            seats.push(
                <Seat 
                    key={seatId}
                    id={seatId}
                    reserved={checkForReserverdSeats(seatId)}
                    tickets={tickets}
                    onSelect={selectSeatHandler}
                >
                    {i}
                </Seat>
            );
        }
        return seats;
    };

    const createRows = () => {
        const rows = [];
        for (let i = 1; i <= numberOfRows; i++) {
            rows.push(
                <ul key={i} className={classes.row}>
                    <li className={classes['row-number']}>{i}</li>
                    {createSeats(i)}
                    <li className={classes['row-number']}>{i}</li>
                </ul>
            );
        };
        return rows;
    };

    return (
        <div className={classes.hall}>
            <div className={classes.rows}>
                {createRows()}
            </div>
            <div className={classes.screen}>Screen</div>
        </div>
    );
};

export default Hall;