import { Fragment, useContext, useState, useRef, useEffect } from 'react';

import { ShowsContext } from '../../store/shows-context';
import ShowItem from './ShowItem';
import classes from './Shows.module.css';

const Shows = ({ showsAvailable, movieTitle }) => {
    const { showsData } = useContext(ShowsContext);
    const dateRef = useRef();
    const [showDay, setShowday] = useState('showDay1');
    const [showDate, setShowDate] = useState('');
    const [tickets, setTickets] = useState(1);
    const [today, setToday] = useState('');
    let dateCounter = 0;

    const getDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + dateCounter);
    
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
   
        dateCounter++;

        return `${day}.${month}.${year}`;
    };

    const onChangeSelectHandler = (event) => {
        const target = event.target;
        setShowday(target.value);
        setShowDate(target.options[target.selectedIndex].text);
    };

    const onChangeTicketsHandler = (event) => {
        setTickets(event.target.value);
    };

    useEffect(() => {
        if (showsAvailable) {
            const options = dateRef.current.options;
            setToday(options[0].text);
            setShowDate(options[options.selectedIndex].text);
        }
    }, [dateRef, showsAvailable, today]);

    return (
        <Fragment>
            {showsAvailable &&
                <div id='shows' className={classes.shows}>
                    <h3>Shows And Times</h3>
                    <form className={classes.form}>
                        <div className={classes['form-column']}>
                            <h4>Date</h4>
                            <select 
                                id='dates' 
                                name='dates' 
                                ref={dateRef} 
                                onChange={onChangeSelectHandler}
                            >
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
                            <select 
                                id='tickets' 
                                name='tickets' 
                                onChange={onChangeTicketsHandler}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </form>
                    <ul>
                        {showsData[showDay].map(show => (
                            <ShowItem 
                                key={show.showtimeId}
                                showtimeId={show.showtimeId}
                                showDay={showDay}
                                date={showDate}
                                title={movieTitle}
                                showtime={show.time}
                                hallNumber={show.hall}
                                hallSize={show.hallSize}
                                reservedSeats={show.reservedSeats}
                                seats={show.seats}
                                tickets={tickets}
                                today={today}
                            />
                        ))}
                    </ul>
                </div>
            }
            {!showsAvailable && 
                <p className={classes['no-shows']}>
                    No shows available for this title.
                </p>
            }
        </Fragment>
    );
};

export default Shows;