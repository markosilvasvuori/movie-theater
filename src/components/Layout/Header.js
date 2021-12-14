import { useState } from 'react';
import { Link } from 'react-router-dom';

import DesktopNavigation from '../Navigation/DesktopNavigation';
import MobileNavigation from '../Navigation/MobileNavigation';
import HamburgerIcon from '../UI/HamburgerIcon';
import Search from '../Search';
import Login from '../Login';
import classes from './Header.module.css';

const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileNav(!showMobileNav);
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to='/'>Movie Theater</Link>
            </div>
            <div className={classes['desktop-nav']}>
                <DesktopNavigation />
            </div>
            <div className={classes.container}>
                <Search />
                <Login />
                <div className={classes['mobile-nav']}>
                    <HamburgerIcon onClick={toggleMobileMenu} />
                    {showMobileNav && 
                        <MobileNavigation onClick={toggleMobileMenu} />
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;