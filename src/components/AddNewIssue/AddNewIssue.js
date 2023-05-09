import './AddNewIssue.css';
import { useSelector } from 'react-redux';

const AddNewIssue = () => {
    const visible = useSelector(state => state.addNewIssueVisible);

    return (
        <div className={`add-new-issue-container ${visible ? 'add-new-issue-visible' : ''}`}>
            Add New Issue
        </div>
    )
};

export default AddNewIssue;