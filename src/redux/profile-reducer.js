import {
    getProfile,
    getStatusAPI,
    profileAPI,
    savePhotoAPI,
    saveProfileAPI,
    updatePhoto,
    updateStatusAPI
} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPDATE_PHOTO = 'UPDATE_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Hi Ppis', likesCount: 12},
        {id: 2, message: 'Yoptope', likesCount: 12},
        {id: 3, message: 'What up?', likesCount: 12},

    ],
    profile: null,
    status: "",

};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case UPDATE_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: 'ADD-POST', newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) =>({type:UPDATE_PHOTO, photos})


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await getProfile(userId)
    dispatch(setUserProfile(response.data))

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await getStatusAPI(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {

    try {
        let response = await updateStatusAPI(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        alert('Саник')
    }
}

export const savePhoto = (file) => async(dispatch) => {
    let response = await savePhotoAPI(file)
    if(response.data.resultCode ===0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async(dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await saveProfileAPI(profile)
    if(response.data.resultCode ===0) {
        dispatch(getUserProfile(userId))
     } else {
         dispatch(stopSubmit( 'edit-profile', {error: response.data.messages[0]}))
         return Promise.reject(response.data.messages[0]);
     }
}


export default profileReducer;