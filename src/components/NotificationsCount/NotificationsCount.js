import './NotificationsCount.css';
import { useSelector } from 'react-redux';

const NotificationsCount = () => {
    /* Get the number of notifications, if any */
    const unreadCount = useSelector(state => state.notifications.filter(obj => obj.read === false));

    return (
        <div className={`count-container ${unreadCount.length > 0 ? 'visible' : ''}`}>{unreadCount.length > 0 && unreadCount.length}</div>
    )
};

export default NotificationsCount;