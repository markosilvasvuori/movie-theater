import { useState } from "react";

import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import Ticket from "./Ticket";
import classes from './BookedMovie.module.css';

const BookedMovie = ({ title, date, time, tickets, row, seats }) => {
    const [showTicketInModal, setShowTicketInModal] = useState(false);

    const showTicket = () => {
        setShowTicketInModal(!showTicketInModal);
    };

    return (
        <>
        {showTicketInModal &&
            <Modal title='Tickets' onClick={showTicket}>
                <div className={classes['ticket-container']}>
                    {seats.map(ticket => (
                        <Ticket
                            key={ticket}
                            title={title}
                            date={date}
                            time={time}
                            row={row}
                            seat={ticket}
                        />
                    ))}
                </div>
            </Modal>
        }
        <li className={classes['booked-movie']}>
            <h4>{title}</h4>
            <div className={classes.details}>
                <p><small>{date} | {time}</small></p>
                <div className={classes.column}>
                    <p><small>Tickets: {tickets}</small></p>
                    <Button onClick={showTicket}>Show ticket</Button>
                </div>
            </div>
        </li>
        </>
    );
};

export default BookedMovie;