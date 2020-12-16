import TYPES from '../actions/types';

const initialState = {
    isLogged: false,
    name: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TYPES.LOG_USER: 
            return {
                isLogged: true,
                name: action.user

            };
        default:
            return state;
    }
}

export default reducer;