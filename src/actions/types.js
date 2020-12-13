const actions = [
    // User
    "LOG_USER"
];

const actionTypes = {};
actions.forEach(action => {
    actionTypes[action] = action;
});

export default actionTypes;