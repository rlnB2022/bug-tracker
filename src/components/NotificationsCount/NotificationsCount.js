import './NotificationsCount.css';
import { useSelector } from 'react-redux';

const NotificationsCount = () => {
    /* Get the number of notifications, if any */
    const count = useSelector(state => state.notifications).length;

    return (
        <div className="count-container">{count}</div>
    )
};

export default NotificationsCount;