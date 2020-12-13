const initialState = {
    isLoading: false,
    albums: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALBUMS_PENDING": 
            return {
                ...state,
                isLoading: true,
                albums: [],
                error: false
            };
        case "ALBUMS_FULFILLED":
            return {
                ...state,
                isLoading: false,
                error: false,
                albums: action.payload
            };
        case "ALBUM_REJECTED":
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