import { createStore } from "redux";

const initialState = {
    activeScreen: 'Dashboard',
    issues: [
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'New', type: 'Feature' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Major', status: 'Completed', type: 'Bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Minor', status: 'Completed', type: 'Bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: '', priority: 'Critical', status: 'In-Progress', type: 'Bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Trivial', status: 'Unassigned', type: 'Bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'In-Progress', type: 'Bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Trivial', status: 'In-Progress', type: 'Bug' },
    ],
    addNewIssueVisible: false,
    addNewIssueReset: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'activeScreen':
            return {
                ...state,
                activeScreen: action.activeScreen
            }
        case 'addNewIssue':
            return {
                ...state,
                addNewIssueVisible: action.visible,
                addNewIssueReset: action.reset
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;