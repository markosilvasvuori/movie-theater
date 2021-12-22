import classes from './Button.module.css';

const Button = (props) => {
    const styles = `
        ${classes.button} 
        ${props.className ? props.className : ''} 
        ${props.disabled ? classes.disabled : ''}
    `;

    return (
        <button className={styles} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;