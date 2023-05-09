import { createStore } from "redux";

const initialState = {
    activeScreen: 'Dashboard',
    issues: [
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'new', type: 'bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'completed', type: 'bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'completed', type: 'bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: '', priority: 'Critical', status: 'inprogress', type: 'bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'unassigned', type: 'bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'inprogress', type: 'bug' },
        { id: '123', name: 'Unable to login', date: 'May 7, 2023', description: 'I am unable to login. Please help.', assignedTo: 'Rick', priority: 'Critical', status: 'inprogress', type: 'bug' },
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'activeScreen':
            return {
                ...state,
                activeScreen: action.activeScreen
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;