import './MobileNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faList, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const MobileNavigation = () => {
    /* Create variable to hold each navigation item */
    /* Includes font awesome icon image and the text below the image */
    const navItems = [
        { img: faGripHorizontal, text: 'Dashboard' },
        { img: faList, text: 'Issues' },
        { img: faBell, text: 'Notifications' },
        { img: faUser, text: 'Account' }
    ];

    /* Map over the navigation items created above to display the navigation items */
    return (
        <div className="mobile-navigation-container">
            {navItems.map(item => {
                return (
                    <div className={`mobile-nav-item active-menu-item`}>
                        <FontAwesomeIcon icon={item.img} size="2x" />
                        <h6>{item.text}</h6>
                    </div>
                )
            })}
        </div>
    )
};

export default MobileNavigation;