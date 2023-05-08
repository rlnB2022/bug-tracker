import './MobileNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faList, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const MobileNavigation = () => {
    /* get active screen */
    const activeScreen = useSelector(state => state.activeScreen);
    console.log(activeScreen);

    /* Create variable to hold each navigation item */
    /* Includes font awesome icon image and the text below the image */
    const navItems = [
        { img: faGripHorizontal, text: 'Dashboard', active: activeScreen === 'dashboard' },
        { img: faList, text: 'Issues', active: activeScreen === 'issues' },
        { img: faBell, text: 'Notifications', active: activeScreen === 'notifications' },
        { img: faUser, text: 'Account', active: activeScreen === 'account' }
    ];

    /* Map over the navigation items created above to display the navigation items */
    return (
        <div className="mobile-navigation-container">
            {navItems.map(item => {
                return (
                    <div className={`mobile-nav-item ${item.active ? 'active-menu-item' : ''}`}>
                        <FontAwesomeIcon icon={item.img} size="2x" />
                        <h6>{item.text}</h6>
                    </div>
                )
            })}
        </div>
    )
};

export default MobileNavigation;