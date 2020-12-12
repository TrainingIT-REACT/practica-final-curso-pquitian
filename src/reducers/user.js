import TYPES from '../actions/types';

const initialState = {
    isLogged: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TYPES.LOG_USER: 
            return {
                isLogged: true
            };
        default:
            return state;
    }
}

export default reducer;