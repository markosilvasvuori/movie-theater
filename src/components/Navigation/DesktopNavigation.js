import { NavLink } from 'react-router-dom';
import classes from './DesktopNavigation.module.css';

const DesktopNavigation = () => {
    return (
        <nav className={classes['desktop-nav']}>
            <ul>
                <li>
                    <NavLink 
                        to='/now-playing'
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                    >
                        Now Playing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/upcoming'
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                    >
                        Upcoming
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default DesktopNavigation;