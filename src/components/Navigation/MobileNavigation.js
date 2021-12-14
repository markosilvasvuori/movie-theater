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
                        <NavLink to='/new'>
                            New
                        </NavLink>
                    </li>
                    <li onClick={closeMobileNavigation}>
                        <NavLink to='/popular'>
                            Popular
                        </NavLink>
                    </li>
                    <li onClick={closeMobileNavigation}>
                        <NavLink to='/upcoming'>
                            Upcoming
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MobileNavigation;