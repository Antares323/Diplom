/**import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state : {

        profilePage: {
            dialogsDt: [
                {id: 1, name: 'Hender'},
                {id: 2, name: 'Yoptope'},
                {id: 3, name: 'What up?'},
                {id: 4, name: 'Вовка Путин'},
                {id: 5, name: 'Вовка Путин'}
            ],
            posts: [
                {id:1, message: 'Hi Ppis', likesCount: 12},
                {id:2, message: 'Yoptope', likesCount: 12},
                {id:3, message: 'What up?', likesCount: 12},
                {id:4, message: 'Вовка Путин', likesCount: 12},
                {id:5, message: 'Вовка Путин', likesCount: 12}
            ],
            newPostText: 'hi'
        },
        dialogsPage: {

            messagesData : [
                {id: 1, message: 'Hi Pdis'},
                {id: 2, message: 'Yoptope'},
                {id: 3, message: 'What up?'},
                {id: 4, message: 'Вовка Путин'},
                {id: 5, message: 'Вовка Путин'},
            ],
            newMessageBody: "",
        }

    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree  ()  {
        console.log('');
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    }
}








export default store;
 **/