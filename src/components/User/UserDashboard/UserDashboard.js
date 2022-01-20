import { useContext } from 'react';

import { AuthContext } from '../../../store/auth-context';
import { UserContext } from '../../../store/user-context';
import BookedMovie from './BookedMovie';
import Button from '../../UI/Button';
import classes from './UserDashboard.module.css';

const UserDashboard = () => {
    const { authCtxValues } = useContext(AuthContext);
    const { userData } = useContext(UserContext);

    const generateKey = () => {
        return Math.random().toString(36).slice(2);
    };

    return (
        <div className={classes['user-dashboard']}>
            <div className={classes.container}>
                <header className={classes.header}>
                    <h2>Hello {userData.username}!</h2>
                    <Button onClick={authCtxValues.logout}>Log out</Button>
                </header>
                <div>
                    <h3>Booked Tickets</h3>
                    {userData.bookedTickets.length === 0 &&
                        <p>No booked tickets.</p>
                    }
                    <ul className={classes['booked-movies']}>
                        {userData.bookedTickets.map(ticket => (
                            <BookedMovie 
                                key={generateKey()}
                                title={ticket.title}
                                date={ticket.date}
                                time={ticket.time}
                                tickets={ticket.tickets}
                                row={ticket.row}
                                seats={ticket.seats}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;