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
        { id: 0, message: '1st notification that is really long and should adjust the size of the surrounding div', read: false },
        { id: 1, message: '2nd notification', read: false },
        { id: 2, message: '3rd notification', read: false },
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
                    { id: state.notifications.length + 1, message: action.message, read: false }
                ]
            }
        case 'markNotificationRead':
            const index = state.notifications.findIndex(notification => notification.id === action.id);

            return {
                ...state,
                notifications: [
                    /* get everything before selected index */
                    ...state.notifications.slice(0, index),
                    {
                        ...state.notifications[index], read: true
                    },
                    /* get everything after selected index */
                    ...state.notifications.slice(index + 1)
                ]
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;