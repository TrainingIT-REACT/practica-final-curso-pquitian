import TYPES from './types';

export const logUser = (user) => ({
    type: TYPES.LOG_USER,
    user
});