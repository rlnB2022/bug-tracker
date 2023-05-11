import './Issues.css';
import ListOfIssues from '../ListOfIssues/ListOfIssues';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const Issues = () => {
    // const addNewIssueVisible = useSelector(state => state.addNewIssueVisible);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'addNewIssue', visible: true, reset: true });
    };

    return (
        <div className="issue-container">
            <button onClick={handleClick} className="btn-issue">
                <FontAwesomeIcon icon={faPlus} className="btn-icon"/>
                Create New Issue
            </button>
            <ListOfIssues />
        </div>
    )
};

export default Issues;