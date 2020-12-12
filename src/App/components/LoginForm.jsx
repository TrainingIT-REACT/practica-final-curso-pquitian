import React from 'react';

const LoginForm = ({ onSubmit, children }) => {
    const handleOnclick = (e) => {
        e.preventDefault();
        onSubmit();
    };
    return <>
        <button onClick={handleOnclick}>Login</button>
        <p>{ children }</p>
    </>

};

export default LoginForm;