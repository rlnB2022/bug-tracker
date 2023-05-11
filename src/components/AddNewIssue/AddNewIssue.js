import './AddNewIssue.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const AddNewIssue = () => {
    const [titleValue, setTitleValue] = useState('');
    const [dateValue, setDateValue] = useState('May 10, 2023'); // stored as a string, not a Date
    const [priorityValue, setPriorityValue] = useState('Critical');

    const visible = useSelector(state => state.addNewIssueVisible);
    const issueList = useSelector(state => state.issues);
    
    const handleSubmit = () => {
        let newId = Math.max(...issueList.map(obj => obj.id)) + 1
    };
    
    /* 2-way bindings for inputs */
    const handleTitleChange = event => {
        setTitleValue(event.target.value);
    };

    const handleDateChange = event => {
        setDateValue(event.target.value);
    }

    const handlePriorityChange = event => {
        setPriorityValue(event.target.value);
    }

    return (
        <div className={`add-new-issue-container ${visible ? 'add-new-issue-visible' : ''}`}>
            <form className="issue-form">
                <label htmlFor="">Title</label>
                <input id="newIssueTitle" type="text" value={titleValue} onChange={handleTitleChange} />
                <label htmlFor="">Date</label>
                <input id="newIssueDate" type="text" value={dateValue} onChange={handleDateChange} />
                <label htmlFor="newIssueType">Type</label>
                <select name="issueType">
                    <option value="bug">Bug</option>
                    <option value="feature">Feature</option>
                    <option value="backlog">Backlog</option>
                </select>
                <label htmlFor="newIssuePriority">Priority</label>
                <input type="text" value={priorityValue} onChange={handlePriorityChange} />
                <label htmlFor="newIssueAssignedTo">Assigned To</label>
                <select name="assignedTo">
                    <option value="bug">Bug</option>
                </select>
            </form>
        </div>
    )
};

export default AddNewIssue;