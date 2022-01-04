import { useContext, useState } from 'react';

import { UserContext } from '../../store/user-context';
import Button from '../UI/Button';
import classes from './LoginForm.module.css';

const LoginFormForModal = ({ inModal, closeModal}) => {
    const {setIsLoggedIn, setUserData} = useContext(UserContext);
    const [enteredUsername, setEnteredUsername] = useState('');

    const usernameOnChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const submitHandler = (event) => {
      event.preventDefault();  
      
      setIsLoggedIn(true);
      setUserData(prevData => {
          return {
              ...prevData,
              username: enteredUsername
          }
      });

      if (inModal) {
        closeModal();
      }
    };

    return (
        <div className={classes['form-container']}>
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
                    type='text' 
                    id='password' 
                    name='password' 
                    placeholder='Password' 
                />
                <Button className={classes['login-button']}>Login</Button>
            </form>
            <p 
                className={classes.register}
            >
                Not a member? <span className={classes.register}>Register now</span>
            </p>
        </div>
    );
}

export default LoginFormForModal;