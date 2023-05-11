import './AddNewIssue.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const AddNewIssue = () => {
    /* useDispatch is used here to hide this component if cancelled
       or to store the new issue AND hide this component if submitted */
    const dispatch = useDispatch();

    /* For adding the class to animate the component in/out */
    const [visible, setVisible] = useState(false);

    const [submitReady, setSubmitReady] = useState(false);

    /* setup useState hooks */
    const [titleValue, setTitleValue] = useState('');
    const [dateValue, setDateValue] = useState(''); // stored as a string, not a Date
    const [descriptionValue, setDescriptionValue] = useState('');
    const [typeValue, setTypeValue] = useState();
    const [priorityValue, setPriorityValue] = useState();
    const [userValue, setUserValue] = useState();

    /* Get issues and users values from the store */
    const issueList = useSelector(state => state.issues);
    const users = useSelector(state => state.users);

    /* 2-way bindings for inputs */
    const handleTitleChange = event => {
        setTitleValue(event.target.value);
    };
    
    const handleDateChange = event => {
        setDateValue(event.target.value);
    }
    
    const handleDescriptionChange = event => {
        setDescriptionValue(event.target.value);
    };

    const handleTypeChange = event => {
        setTypeValue(event.target.value);
    };

    const handlePriorityChange = event => {
        setPriorityValue(event.target.value);
    };

    const handleUserChange = event => {
        setUserValue(event.target.value);
    };

    const hideModal = () => {
        setVisible(false);
        
        setTimeout(() => {
            dispatch({ type: 'showAddNewIssueModal', addNewIssueVisible: false });
        }, 250);
    };

    /* Cancel adding a new Issue - remove the class first so it animates out, then change state */
    const handleCancel = () => {
        hideModal();
    };

    /* Submit button */
    const handleSubmit = event => {
        event.preventDefault();

        /* Get a new id using the highest id found in the array + 1 */
        let newId = Math.max(...issueList.map(obj => obj.id)) + 1

        /* create the new object to save to the store */
        const issueObj = {
            id: newId,
            title: titleValue,
            date: dateValue,
            description: descriptionValue,
            assignedTo: userValue,
            priority: priorityValue,
            status: 'New',
            type: typeValue
        };

        /* Save to the store */
        dispatch({type: 'addNewIssue', issueObj});

        /* Add a notification */
        dispatch({type: 'addNotification', message: 'New issue created!' });

        /* hide the modal */
        hideModal();
    };

    /* When the component mounts, add the class to animate in the component */
    useEffect(() => {
        setVisible(true);
    }, []);

    useEffect(() => {
        validateInfo();
    }, [titleValue, dateValue, descriptionValue, typeValue, priorityValue, userValue]);

    /* Verify that each of the inputs and selects have been filled in, enable the submit button */
    const validateInfo = () => {
        if(!titleValue || !dateValue || !descriptionValue || !typeValue || !priorityValue || !userValue) {
            setSubmitReady(false);
            return;
        }

        setSubmitReady(true);
    };

    return (
        <div className={`add-new-issue-container ${visible ? 'add-new-issue-visible' : ''}`}>
            <form className="issue-form">
                <label htmlFor="newIssueTitle">Title</label>
                <input placeholder="Enter a title" id="newIssueTitle" type="text" value={titleValue} onChange={handleTitleChange} />
                <label htmlFor="newIssueDate">Date</label>
                <input placeholder="Enter a date in text format" id="newIssueDate" type="text" value={dateValue} onChange={handleDateChange} />
                <label htmlFor="newIssueType">Type</label>
                <select id="newIssueType" name="issueType" onChange={handleTypeChange}>
                    <option value="" selected disabled hidden>Choose a Type</option>
                    <option value="bug">Bug</option>
                    <option value="feature">Feature</option>
                    <option value="backlog">Backlog</option>
                </select>
                <label htmlFor="newIssuePriority">Priority</label>
                <select id="newIssuePriority" name="priority" onChange={handlePriorityChange}>
                    <option value="" selected disabled hidden>Choose a Priority</option>
                    <option value="critical">Critical</option>
                    <option value="minor">Minor</option>
                    <option value="major">Major</option>
                    <option value="trivial">Trivial</option>
                </select>
                <label htmlFor="newIssueAssignedTo">Assigned To</label>
                <select id="newIssueAssignedTo" name="assignedTo" onChange={handleUserChange}>
                    <option value="" selected disabled hidden>Choose a User</option>
                    {users.map(user => {
                        return (
                            <option value={user.name}>{user.name}</option>
                        )
                    })}
                </select>
                <label htmlFor="newIssueDescription">Description</label>
                <textarea placeholder="Enter a description" type="text" id="newIssueDescription" value={descriptionValue} onChange={handleDescriptionChange} />
                <div className="new-issue-button-container">
                    <button className="cancel" type="button" onClick={handleCancel}>Cancel</button>
                    <button disabled={!submitReady} className={`submit ${submitReady ? 'submit-ready' : ''}`} type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default AddNewIssue;