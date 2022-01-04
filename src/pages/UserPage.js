import { Fragment, useContext } from 'react';

import { UserContext } from "../store/user-context";
import LoginForm from '../components/User/LoginForm';
import UserDashboard from '../components/User/UserDashboard/UserDashboard';
import classes from './UserPage.module.css';

const UserPage = () => {
    const {isLoggedIn} = useContext(UserContext);

    return (
        <Fragment>
            {!isLoggedIn &&
                <div className={classes.container}>
                    <h2>Login</h2>
                    <LoginForm />
                </div>
            }
            {isLoggedIn &&
                <UserDashboard />
            }
        </Fragment>
    );
};

export default UserPage;