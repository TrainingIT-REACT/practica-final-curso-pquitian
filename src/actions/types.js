const actions = [
    // User
    "LOG_USER",
    "UPDATE_USER_HISTORY"
];

const actionTypes = {};
actions.forEach(action => {
    actionTypes[action] = action;
});

export default actionTypes;