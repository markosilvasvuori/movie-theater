import { Link } from 'react-router-dom';

import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <Link to='/'>
            <div className={classes.logo} onClick={props.onClick}>
                M<span className={classes.detail}>o</span>vie Theater
            </div>
        </Link>
    );
};

export default Logo;