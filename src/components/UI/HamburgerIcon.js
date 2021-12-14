import classes from './HamburgerIcon.module.css';

const MobileNavIcon = (props) => {
    return (
        <button className={classes['hamburger-icon']} onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};

export default MobileNavIcon;