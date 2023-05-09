import './ListOfIssues.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faStar, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';

const ListOfIssues = () => {
    const listOfIssues = useSelector(state => state.issues);
    const issueType = {
        'Bug': faBug,
        'Feature': faStar
    };

    return (
        <div className="list-of-issues-container">
            {listOfIssues.map(issue => {
                return (
                    <div className="issue-container">
                        <div className={`issue-priority ${issue.priority}`}>{issue.priority}</div>
                        <div className="issue-details">
                            <div className="issue-top">
                                <div className="issue-user">
                                    <FontAwesomeIcon icon={faUser} className={`icon ${issue.assignedTo !== '' ? 'assigned' : ''}`}/>
                                </div>
                                <div className="issue-info">
                                    <div className="info">
                                        <div>
                                            <FontAwesomeIcon icon={faTicket} />
                                            {issue.id}
                                        </div>
                                        <div>
                                            {issue.date}
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div>
                                            <FontAwesomeIcon icon={issueType[issue.type]} />
                                            {issue.type}
                                        </div>
                                        <div className="info-status">
                                            {issue.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="issue-bottom">
                                <div className="issue-description">{issue.description}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default ListOfIssues;