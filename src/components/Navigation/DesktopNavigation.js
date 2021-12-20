import { NavLink } from 'react-router-dom';

import classes from './DesktopNavigation.module.css';

const DesktopNavigation = () => {
    return (
        <nav className={classes['desktop-nav']}>
            <ul>
                <li>
                    <NavLink to='/now-playing/0'>
                        Now Playing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/upcoming/0'>
                        Upcoming
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default DesktopNavigation;