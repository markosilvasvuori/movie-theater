import { Fragment } from 'react';

import classes from './Login.module.css';

const Login = (props) => {
    return (
        <Fragment>
            <button 
                className={classes.login}
                onClick={props.onClick}
            >
                Login
            </button>
        </Fragment>
    );
}

export default Login;