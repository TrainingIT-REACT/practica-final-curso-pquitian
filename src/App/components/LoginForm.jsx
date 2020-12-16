import React, { createRef } from 'react';
import { Form, Button } from 'semantic-ui-react';

const LoginForm = ({ onSubmit, children }) => {
    const nameInput = createRef(); 

    const handleOnclick = (e) => {
        e.preventDefault();
        onSubmit(nameInput.current.value);
    };
    return <>
        <Form>
            <Form.Field>
                <label htmlFor="name">¿Cuál es tu nombre?</label>
                <input id="name" name="name" ref={nameInput} type="text" placeholder="Ej: Carla"/>
            </Form.Field>

            <Button type='submit' onClick={handleOnclick}>Login</Button>

            <p>{ children }</p>
        </Form>
    </>

};

export default LoginForm;