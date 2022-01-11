import { useContext } from 'react';
import { UserContext } from '../../../store/user-context';

import BookedMovie from './BookedMovie';
import Button from '../../UI/Button';
import classes from './UserDashboard.module.css';

const UserDashboard = () => {
    const {userData, logOutHandler} = useContext(UserContext);

    return (
        <div className={classes['user-dashboard']}>
            <div className={classes.container}>
                <header className={classes.header}>
                    <h2>Hello {userData.username}!</h2>
                    <Button onClick={logOutHandler}>Log out</Button>
                </header>
                <div>
                    <h3>Booked Tickets</h3>
                    <ul className={classes['booked-movies']}>
                        {userData.bookedTickets.map(ticket => (
                            <BookedMovie 
                                key={ticket.title}
                                title={ticket.title}
                                date={ticket.date}
                                time={ticket.time}
                                amount={ticket.amount}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;