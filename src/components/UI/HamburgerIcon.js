import classes from './HamburgerIcon.module.css';

const MobileNavIcon = (props) => {
    let styles = `${classes['hamburger-icon']} ${props.onOpen ? classes.open : ''}`;

    return (
        <button 
            className={styles} 
            onClick={props.onClick}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};

export default MobileNavIcon;