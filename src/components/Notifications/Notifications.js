import './Notifications.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Notifications = () => {
    const dispatch = useDispatch();

    /* Get list of notifications */
    const notifications = useSelector(state => state.notifications);

    /* Mark the notification as read */
    const handleClick = (id) => {
        dispatch({ type: 'markNotificationRead', id: id})
    };

    return (
        <div className="notifications-container">
            {notifications.map(notification => {
                return (
                    <div className="notification-item-container">
                        <div className="notification-item">
                            <div className="button-read-container">
                                <button className={`btnRead ${notification.read ? 'read' : ''}`} onClick={() => handleClick(notification.id)}>
                                    {notification.read ? <FontAwesomeIcon icon={faCheckCircle} /> : ''}
                                    <p className="mark-read">{!notification.read ? 'Mark ' : ''}Read</p>
                                </button>
                                {notification.message}
                            </div>
                        </div>
                    </div>
                    )
            })}
        </div>
    )
};

export default Notifications;