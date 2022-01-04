import classes from './Auditorium.module.css';

const Auditorium = () => {
    let seatCounter = 1;

    const createSeats = () => {
        const seats = [];
        for (let i = 0; i < 20; i++) {
            seats.push(
                <li id={seatCounter} className={classes.seat}></li>
            );
            seatCounter++;
        }
        return seats;
    };

    const createRows = () => {
        const rows = [];
        for (let i = 0; i < 15; i++) {
            rows.push(
                <ul className={classes.row}>
                    {createSeats()}
                </ul>
            );
        };
        return rows;
    }

    return (
        <div className={classes.auditorium}>
            {createRows()}
            <div className={classes.screen}>Screen</div>
        </div>
    );
};

export default Auditorium;