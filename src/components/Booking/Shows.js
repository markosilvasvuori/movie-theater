import { Fragment, useContext, useState } from 'react';

import { ShowsContext } from '../../store/shows-context';
import ShowItem from './ShowItem';
import classes from './Shows.module.css';

const Shows = ({ showsAvailable, movieTitle }) => {
    const { DUMMY_DATA } = useContext(ShowsContext);
    const [showDay, setShowday] = useState('showDay1');
    const [tickets, setTickets] = useState(1);

    let dateCounter = 0;
    const getDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + dateCounter);
    
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
   
        dateCounter++;

        return `${year}.${month}.${day}`;
    };

    const onChangeSelectHandler = (event) => {
        setShowday(event.target.value);
    };

    const onChangeTicketsHandler = (event) => {
        setTickets(event.target.value);
    };

    return (
        <Fragment>
            {showsAvailable &&
                <div id='shows' className={classes.shows}>
                    <h3>Shows And Times</h3>
                    <form className={classes.form}>
                        <div className={classes['form-column']}>
                            <h4>Date</h4>
                            <select id='dates' name='dates' onChange={onChangeSelectHandler}>
                                <option value='showDay1'>Today {getDate()}</option>
                                <option value='showDay2'>Tomorrow {getDate()}</option>
                                <option value='showDay3'>{getDate()}</option>
                                <option value='showDay4'>{getDate()}</option>
                                <option value='showDay5'>{getDate()}</option>
                                <option value='showDay6'>{getDate()}</option>
                            </select>
                        </div>
                        <div className={classes['form-column']}>
                            <h4>Tickets</h4>
                            <select id='tickets' name='tickets' onChange={onChangeTicketsHandler}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </form>
                    <ul>
                        {DUMMY_DATA[showDay].map(show => (
                            <ShowItem 
                                key={show.id}
                                id={show.id}
                                title={movieTitle}
                                showTime={show.time}
                                auditoriumNumber={show.auditorium}
                                freeSeats={show.freeSeats}
                                tickets={tickets}
                            />
                        ))}
                    </ul>
                </div>
            }
            {!showsAvailable && 
                <p className={classes['no-shows']}>No shows available for this title.</p>
            }
        </Fragment>
    );
};

export default Shows;