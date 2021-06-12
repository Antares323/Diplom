import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


let state = {
    posts: [
        {id: 1, message: 'Hi Ppis', likesCount: 12},
        {id: 2, message: 'Yoptope', likesCount: 12},
        {id: 3, message: 'What up?', likesCount: 12},
        {id: 4, message: 'Вовка Путин', likesCount: 12},
        {id: 5, message: 'Вовка Путин', likesCount: 12}
    ],

};


test('new Post', () => {
    let action = addPostActionCreator('епты');
    let newState = profileReducer(state, action);
    expect(  newState.posts.length).toBe(6);
});

test('new Post message', () => {
    let action = addPostActionCreator('епты');
    let newState = profileReducer(state, action);
    expect(  newState.posts[5].message).toBe("епты");
});

test("DELETE", () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(  newState.posts.length).toBe(4);
});

test("DELETE not", () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(  newState.posts.length).toBe(4);
});