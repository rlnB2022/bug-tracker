import './Dashboard.css';
import DashboardItem from './Dashboard__Item';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const newIssuesCount = useSelector(state => state.issues.filter(issue => issue.status === 'new')).length;
    const completedCount = useSelector(state => state.issues.filter(issue => issue.status === 'completed')).length;
    const unassignedCount = useSelector(state => state.issues.filter(issue => issue.status === 'unassigned')).length;
    const inProgressCount = useSelector(state => state.issues.filter(issue => issue.status === 'inprogress')).length;

    const newIssues = <DashboardItem title="New Issues" count={newIssuesCount} />;
    const completedIssues = <DashboardItem title="Completed Issues" count={completedCount} />;
    const unassignedIssues = <DashboardItem title="Unassigned Issues" count={unassignedCount} />;
    const inProgressIssues = <DashboardItem title="In-Progress" count={inProgressCount} />;

    return (
        <div className="dashboard-container">
            {newIssues}
            {completedIssues}
            {unassignedIssues}
            {inProgressIssues}
        </div>
    )
};

export default Dashboard;