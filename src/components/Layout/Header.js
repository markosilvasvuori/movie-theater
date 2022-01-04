import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../store/user-context';
import DesktopNavigation from '../Navigation/DesktopNavigation';
import MobileNavigation from '../Navigation/MobileNavigation';
import HamburgerIcon from '../UI/HamburgerIcon';
import Logo from '../UI/Logo';
import Search from '../Search/Search';
import Login from '../User/Login';
import userIcon from '../../img/user.svg';
import classes from './Header.module.css';

const Header = ({ onShowModal }) => {
    const {isLoggedIn} = useContext(UserContext);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileNav(!showMobileNav);
    }

    const closeMobileMenu = () => {
        setShowMobileNav(false);
    };

    return (
        <header id='top' className={classes.header}>
            <Logo onClick={closeMobileMenu} />
            <div className={classes['desktop-nav']}>
                <DesktopNavigation />
            </div>
            <div className={classes.container}>
                <Search />
                {!isLoggedIn &&
                    <Login onClick={onShowModal} />
                }
                {isLoggedIn &&
                    <Link className={classes['user-icon']} to='/userpage'>
                        <img src={userIcon} alt='user' />
                    </Link>
                }
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