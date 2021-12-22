import { useState } from 'react';

import DesktopNavigation from '../Navigation/DesktopNavigation';
import MobileNavigation from '../Navigation/MobileNavigation';
import HamburgerIcon from '../UI/HamburgerIcon';
import Logo from '../UI/Logo';
import Search from '../Search/Search';
import Login from '../User/Login';
import classes from './Header.module.css';

const Header = ({ onShowModal }) => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileNav(!showMobileNav);
    }

    const closeMobileMenu = () => {
        setShowMobileNav(false);
    };

    return (
        <header className={classes.header}>
            <Logo onClick={closeMobileMenu} />
            <div className={classes['desktop-nav']}>
                <DesktopNavigation />
            </div>
            <div className={classes.container}>
                <Search />
                <Login onClick={onShowModal} />
                <div className={classes['mobile-nav']}>
                    <HamburgerIcon onClick={toggleMobileMenu} onOpen={showMobileNav} />
                    {showMobileNav && 
                        <MobileNavigation onClick={closeMobileMenu} />
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;