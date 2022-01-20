import { useContext } from 'react';

import { ShowsContext } from '../../store/shows-context';
import Seat from './Seat';
import classes from './Hall.module.css';

const Hall = ({ hallSize, movieTitle, showDay, showtimeId, tickets, onSelectSeats }) => {
    const { showsData } = useContext(ShowsContext);
    const numberOfRows = hallSize.rows;
    const seatsInRow = hallSize.seatsInRow;

    const checkForReserverdSeats = (seatId) => {
        const showDayToCheck = showsData[showDay];
        const showTimeToCheck = showDayToCheck.filter(showDay => showDay.showtimeId === showtimeId);

        const seatToCheck = showTimeToCheck[0].reservedSeats.filter(seat => 
            seat.seatId === seatId &&
            (seat.movieTitle.includes(movieTitle) ||
            seat.movieTitle.includes('demo_seat'))
        );

        if(seatToCheck.length) {
            return true;
        }
    }

    const selectSeatHandler = (seat) => {
        const selectedSeats = [];
        const parent = seat.parentNode;
        const allRows = parent.parentNode.children;
        let seatReserved = checkForReserverdSeats(seat.id);
        let selectedSeat = seat;
        let counter = 0;

        if (seatReserved) {
            return;
        }

        // Reset all selections
        for (let i = 0; i < allRows.length; i++) {
            let row = allRows[i];

            for (let j = 1; j < row.children.length-1; j++) {
                let seat = row.children[j];
                seat.classList.remove(classes['selected-seat']);
            }
        }

        while (tickets > counter) {
            if (!seatReserved) {
                selectedSeats.push(selectedSeat.id);
                selectedSeat.classList.add(classes['selected-seat']);

                // Next seat
                if (selectedSeat.nextSibling.id) {
                    selectedSeat = selectedSeat.nextSibling;
                    seatReserved = checkForReserverdSeats(selectedSeat.id);
                    counter++;
                    continue;
                }
                
                // Switch to next row after current row's last seat
                if (!selectedSeat.nextSibling.id && selectedSeat.parentNode.nextSibling) {
                    selectedSeat = selectedSeat.parentNode.nextSibling.firstChild.nextSibling;
                    seatReserved = checkForReserverdSeats(selectedSeat.id);
                    counter++;
                    continue;
                }

                // Switch to first row after last row's last seat
                if (!selectedSeat.nextSibling.id && !selectedSeat.parentNode.nextSibling) {
                    selectedSeat = selectedSeat.parentNode.parentNode.firstChild.firstChild.nextSibling;
                    seatReserved = checkForReserverdSeats(selectedSeat.id);
                    counter++;
                    continue;
                }
            }

            if (seatReserved && !selectedSeat.nextSibling.id && selectedSeat.parentNode.nextSibling) {
                selectedSeat = selectedSeat.parentNode.nextSibling.firstChild.nextSibling;
                seatReserved = checkForReserverdSeats(selectedSeat.id);
            }

            if (seatReserved && !selectedSeat.nextSibling.id && !selectedSeat.parentNode.nextSibling) {
                selectedSeat = selectedSeat.parentNode.parentNode.firstChild.firstChild.nextSibling;
                seatReserved = checkForReserverdSeats(selectedSeat.id);
            }
            
            if (seatReserved) {
                selectedSeat = selectedSeat.nextSibling;
                seatReserved = checkForReserverdSeats(selectedSeat.id);
            }
        }

        onSelectSeats(selectedSeats);
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
            rows.unshift(
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