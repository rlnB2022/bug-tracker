import { createStore } from "redux";

const initialState = {
    activeScreen: 'Dashboard',
    issues: [
        { id: '4235', title: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'New', type: 'Feature' },
        { id: '4240', title: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Major', status: 'Completed', type: 'Bug' },
        { id: '4399', title: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Minor', status: 'Completed', type: 'Bug' },
        { id: '123', title: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: '', priority: 'Critical', status: 'In-Progress', type: 'Bug' },
        { id: '4458', title: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Trivial', status: 'Unassigned', type: 'Bug' },
        { id: '4685', title: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'In-Progress', type: 'Bug' },
        { id: '4893', title: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Trivial', status: 'In-Progress', type: 'Bug' },
    ],
    addNewIssueVisible: false,
    addNewIssueReset: false,
    notifications: [
        { message: '1st notification' },
        { message: '2nd notification' },
        { message: '3rd notification' },
    ],
    users: [
        { userId: 1, name: 'Rick' },
        { userId: 2, name: 'Brian' },
        { userId: 3, name: 'Lisa' },
        { userId: 4, name: 'Jennifer' }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'activeScreen':
            return {
                ...state,
                activeScreen: action.activeScreen
            }
        case 'showAddNewIssueModal':
            return {
                ...state,
                addNewIssueVisible: action.visible,
                addNewIssueReset: action.reset
            }
        case 'addNewIssue':
            return {
                ...state,
                issues: [
                    ...state.issues,
                    action.issueObj
                ]
            }
        case 'addNotification':
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    { message: action.message }
                ]
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;