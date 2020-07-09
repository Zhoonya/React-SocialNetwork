import Message from "../Components/Content/Dialogs/Messages/Message/Message";
import React from "react";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export const store = {
    _state: {
        dialogsPage: {
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
            newMessageText: "",
        },
        profilePage: {
            posts: [
                {id: "4", date: "20 june 2020", message: "MewMewMewMewMewMewMew", likesCount: "123"},
                {id: "3", date: "15 june 2020", message: "I ate all stocks of sausage, poured into the owner's slippers and broke a flower pot. Productive day. I'm tired.", likesCount: "99999"},
                {id: "2", date: "13 june 2020", message: "I'm fat soft kitty!", likesCount: "35"},
                {id: "1", date: "11 june 2020", message: "Hi! I'm here!", likesCount: "20"},
            ],
            newPostText: "Hi",
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
};
