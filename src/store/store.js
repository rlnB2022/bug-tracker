import { createStore } from "redux";

const initialState = {
    activeScreen: 'Dashboard'
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