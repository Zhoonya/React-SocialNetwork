import React from "react";
import Message from "./Message/Message";



export default function Messages (props) {
    const createMessagesMarkup = (messages) => {
        return messages.map((message) => {
            return <Message name={message.name} key={message.id} date={message.date} text={message.text}/>
        })
    };

    return(
        <div>
            {createMessagesMarkup(props.messages)}
        </div>
    );
};
