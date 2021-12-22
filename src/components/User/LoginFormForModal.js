import Button from '../UI/Button';
import classes from './LoginFormForModal.module.css';

const LoginFormForModal = () => {
    const submitHandler = (event) => {
      event.preventDefault();  
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