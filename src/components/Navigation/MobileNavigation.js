import { NavLink } from 'react-router-dom';
import classes from './MobileNavigation.module.css';

const MobileNavigation = (props) => {
    const closeMobileNavigation = () => {
        props.onClick();
    }

    return (
        <div className={classes['mobile-nav']}>
            <nav>
                <ul>
                    <li onClick={closeMobileNavigation}>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                            to='/now-playing'>
                            Now Playing
                        </NavLink>
                    </li>
                    <li onClick={closeMobileNavigation}>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                            to='/upcoming'>
                            Upcoming
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MobileNavigation;