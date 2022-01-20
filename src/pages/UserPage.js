import { Fragment, useContext } from 'react';

import { AuthContext } from "../store/auth-context";
import LoginForm from '../components/User/LoginForm';
import UserDashboard from '../components/User/UserDashboard/UserDashboard';
import classes from './UserPage.module.css';

const UserPage = (props) => {
    const { authCtxValues } = useContext(AuthContext);

    return (
        <Fragment>
            {!authCtxValues.isLoggedIn &&
                <div className={classes.container}>
                    <LoginForm />
                </div>
            }
            {authCtxValues.isLoggedIn &&
                <UserDashboard closeModal={props.closeModal} />
            }
        </Fragment>
    );
};

export default UserPage;