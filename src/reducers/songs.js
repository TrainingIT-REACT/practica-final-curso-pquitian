const initialState = {
    isLoading: true,
    songs: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SONGS_PENDING": 
            return {
                ...state,
                isLoading: true,
                songs: [],
                error: false
            };
        case "SONGS_FULFILLED":
            return {
                ...state,
                isLoading: false,
                error: false,
                songs: action.payload
            };
        case "SONGS_REJECTED":
            return {
                ...state,
                isLoading: false,
                error: true
            };
        default:
            return state;
    }
}

export default reducer;
