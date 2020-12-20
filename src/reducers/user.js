import TYPES from '../actions/types';

const initialState = {
    isLogged: false,
    name: "",
    songsHistory: [],
    albumsHistory: []
};

const reducer = (state = initialState, action) => {
    const removeFromHistoryIfPresent = (song) => {
        const history = [...state.songsHistory];
        const isPresent = history.find(item => {
            return item.id === song.id;
        }) || false;
        const removeFromHistory = () => {
            return history.filter(h => h.id !== song.id);
        }

        return isPresent ? removeFromHistory() : history;
    };

    switch(action.type) {
        case TYPES.LOG_USER: 
            return {
                isLogged: true,
                name: action.name,
                songsHistory: [...state.songsHistory],
                albumsHistory: [...state.albumsHistory]
            };
        case TYPES.UPDATE_USER_HISTORY:
            const playedSong = action.songsHistory;
            const cleanedHistory = removeFromHistoryIfPresent(playedSong);

            return {
                isLogged: true,
                name: state.name,
                songsHistory: [playedSong, ...cleanedHistory],
                albumsHistory: [...state.albumsHistory]
            }
        default:
            return state;
    }
}

export default reducer;