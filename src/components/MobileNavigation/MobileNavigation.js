import './MobileNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faList, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

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

    /* Map over the navigation items created above to display the navigation items */
    return (
        <div className="mobile-navigation-container">
            {navItems.map(item => {
                return (
                    <div onClick={() => handleClick(item.text)} className={`mobile-nav-item ${item.active ? 'active-menu-item' : ''}`}>
                        <FontAwesomeIcon icon={item.img} size="2x" />
                        <h6>{item.text}</h6>
                    </div>
                )
            })}
        </div>
    )
};

export default MobileNavigation;