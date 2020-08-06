const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
    dialogs: [
        {id:"1", name: "Orange Boss"},
        {id:"2", name: "White Snow"},
        {id:"3", name: "Black Devils"},
        {id:"4", name: "MewMewMew"},
    ],
    messages: [
        {name: "Orange Boss", date: "17 june 2020 20:29", text: "lalala"},
        {name: "I", date: "17 june 2020 20:29", text: "trololo"},
        {name: "Orange Boss", date: "17 june 2020 20:29", text: "abrakadabra"},
    ],
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                name: "I",
                date: String(new Date()),
                text: action.message,
            };
            const stateCopy = {
                ...state,
                messages: [...state.messages, newMessage]
            };
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        default:
            return state;
    }
};

export const sendMessageActionCreator = (message) => {
    return {
        type: SEND_MESSAGE,
        message
    }
};
