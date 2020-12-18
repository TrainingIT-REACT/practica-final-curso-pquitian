import React from 'react';
import { Message } from 'semantic-ui-react';

const FeedbackMessage = ({negative, success, warning, message, children}) => {
    

    return (
         <Message
            negative={negative}
            success={success}
            warning={warning}>
             <Message.Header>{message}</Message.Header>
             { children && <p>{children}</p>}
        </Message>
    );

}
   

export default FeedbackMessage;