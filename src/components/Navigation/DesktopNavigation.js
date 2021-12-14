import { NavLink } from 'react-router-dom';

import classes from './DesktopNavigation.module.css';

const DesktopNavigation = () => {
    return (
        <nav className={classes['desktop-nav']}>
            <ul>
                <li>
                    <NavLink to='/new'>
                        New
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/popular'>
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/upcoming'>
                        Upcoming
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default DesktopNavigation;