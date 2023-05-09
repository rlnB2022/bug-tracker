import './Dashboard__Item.css';

const DashboardItem = ({title, count}) => {
    return (
        <div className="dashboard-item">
            <h2 className="header-item">{title}</h2>
            <h2 className="header-count">{count}</h2>
        </div>
    )
};

export default DashboardItem;