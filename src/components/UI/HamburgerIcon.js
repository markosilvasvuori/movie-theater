import classes from './HamburgerIcon.module.css';

const MobileNavIcon = (props) => {
    let styles = `${classes['hamburger-icon']}`;

    if (props.onOpen) {
        styles = `${classes['hamburger-icon']} ${classes.open}`; 
    }
    
    return (
        <button className={styles} onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};

export default MobileNavIcon;