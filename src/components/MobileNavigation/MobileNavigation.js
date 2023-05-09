import './MobileNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faList, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const MobileNavigation = () => {
    /* get active screen */
    const activeScreen = useSelector(state => state.activeScreen);
    
    const dispatch = useDispatch();

    /* Create variable to hold each navigation item */
    /* Includes font awesome icon image and the text below the image */
    const navItems = [
        { img: faGripHorizontal, text: 'Dashboard', active: activeScreen === 'Dashboard' },
        { img: faList, text: 'Issues', active: activeScreen === 'Issues' },
        { img: faBell, text: 'Notifications', active: activeScreen === 'Notifications' },
        { img: faUser, text: 'Account', active: activeScreen === 'Account' }
    ];

    const handleClick = (activeScreen) => {
        dispatch({ type: 'activeScreen', activeScreen: activeScreen})
    };

    /* Map over the navigation items created above */
    return (
        <div className="mobile-navigation-container">
            {navItems.map(item => {
                return (
                    <div className={`mobile-nav-item ${item.active ? 'active-menu-item' : ''}`}>
                        <NavLink className={({isActive}) => isActive ? 'activeNavLink' : 'inactiveNavLink'} to={`/${item.text}`} onClick={() => handleClick(item.text)}>
                            <FontAwesomeIcon icon={item.img} size="2x" />
                            <h6>{item.text}</h6>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    )
};

export default MobileNavigation;