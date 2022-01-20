import { useContext, useState, useEffect } from 'react';

import { AuthContext } from '../../store/auth-context';
import { UserContext } from '../../store/user-context';
import Button from '../UI/Button';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './LoginForm.module.css';

const LoginForm = ({ inModal, closeModal}) => {
    const API_KEY = process.env.REACT_APP_AUTH_API_KEY;
    const { authCtxValues } = useContext(AuthContext);
    const { setUserData } = useContext(UserContext);
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [authFailed, setAuthFailed] = useState(false);
    const [loginCompleted, setLoginCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let tokenData;

    const usernameOnChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const passwordOnChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const fetchToken = async () => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
            {
                method: 'POST',
                body: JSON.stringify({'returnSecureToken': true}),
                headers: {'Content-Type': 'application/json'}
            }
        );
        const data = await response.json();

        if (!response.ok) {
            setAuthFailed(true);
        } else {
            setAuthFailed(false);
            return data;
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (!enteredUsername && !enteredPassword) {
            setUsernameError(true);
            setPasswordError(true);
            return;
        } else {
            setUsernameError(false);
            setPasswordError(false); 
        }

        if (!enteredUsername) {
            setUsernameError(true);
            return;
        } else {
            setUsernameError(false);
        }

        if (!enteredPassword) {
            setPasswordError(true);
            return;
        } else {
            setPasswordError(false);
        }

        setIsLoading(true);
        tokenData = await fetchToken();
        setUserData(prevData => {
            return {
                ...prevData,
                username: enteredUsername
            }
        });

        setIsLoading(false);

        if (tokenData) {
            setLoginCompleted(true);
            localStorage.setItem('username', enteredUsername); 
            authCtxValues.login(tokenData.idToken);
        }
    };

    useEffect(() => {
        if (inModal && !authFailed && loginCompleted) {
            closeModal();
        }
    }, [authFailed, inModal, closeModal, loginCompleted]);

    return (
        <div className={classes['form-container']}>
            <div className={classes.notification}>
                <p>To login, type anything as username and password.</p>
                <p>(This is a demo website)</p>
            </div>
            <form className={classes.form} onSubmit={submitHandler}>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text'
                    id='username' 
                    name='username' 
                    placeholder='Username' 
                    onChange={usernameOnChangeHandler}
                />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    id='password' 
                    name='password' 
                    placeholder='Password' 
                    onChange={passwordOnChangeHandler}
                />
                {authFailed && 
                    <p className={classes.error}>Login authentication failed. Please try again.</p>
                }
                {usernameError &&
                    <p className={classes.error}>Please enter username.</p>
                }
                {passwordError &&
                    <p className={classes.error}>Please enter password.</p>
                }
                {!isLoading &&
                    <Button className={classes['login-button']}>Login</Button>
                }
                {isLoading &&
                    <LoadingSpinner />
                }
            </form>
            <p className={classes.register}>
                Not a member? <span className={classes.register}>Register now</span>
            </p>
        </div>
    );
}

export default LoginForm;