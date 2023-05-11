import './Notifications.css';
import { useSelector } from 'react-redux';

const Notifications = () => {
    /* Get list of notifications */
    const notifications = useSelector(state => state.notifications);

    return (
        <div className="notifications-container">
            {notifications.map(notification => {
                return (
                    <div className="notification-item">
                        {notification.message}
                    </div>
                    )
            })}
        </div>
    )
};

export default Notifications;