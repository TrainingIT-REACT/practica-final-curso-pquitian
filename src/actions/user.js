import TYPES from './types';

export const logUser = (name) => ({
    type: TYPES.LOG_USER,
    name
});

export const updateListeningHistory = (songsHistory) => ({
    type: TYPES.UPDATE_USER_HISTORY,
    songsHistory
});