import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './Slide.module.css';

const Slide = (props) => {
    return (
        <div className={classes.slide}>
            <div className={classes.details}>
                <h2>{props.title}</h2>
                <p className={classes.info}>
                    <span>Runtime </span>
                    <span>Category</span>
                </p>
                <p className={classes.rating}>Rating</p>
                <div className={classes.links}>
                    <Button className={classes.button}>Get Tickets</Button>
                    <Link to='/movie'>More info</Link>
                </div>
            </div>
        </div>
    );
}

export default Slide;