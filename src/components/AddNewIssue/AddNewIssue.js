import './AddNewIssue.css';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddNewIssue = () => {
    const visible = useSelector(state => state.addNewIssueVisible);
    const id = uuidv4();

    return (
        <div className={`add-new-issue-container ${visible ? 'add-new-issue-visible' : ''}`}>
            Add New Issue
        </div>
    )
};

export default AddNewIssue;