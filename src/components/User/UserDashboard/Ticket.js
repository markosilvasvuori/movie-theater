import classes from './Ticket.module.css';

const Ticket = ({ title, date, time, row, seat }) => {
    return (
        <div className={classes.ticket}>
            <div className={classes.top}>
                <h2>{title}</h2>
                <h3>Date</h3>
                <p>{date}</p>
                <h3>Time</h3>
                <p>{time}</p>
            </div>
            <div className={classes.bottom}>
                <div>
                    <h3>Row</h3>
                    <p>{row}</p>
                </div>
                <div>
                    <h3>Seat</h3>
                    <p>{seat}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;