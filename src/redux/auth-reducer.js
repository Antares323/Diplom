import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
            case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSucces = (captchaUrl) => ({
    type: GET_CAPTCHA_URL,
    payload: {captchaUrl}
});





export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email, avatar} = response.data.data;
            dispatch(setAuthUserData(id, email, login, avatar, true));
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
        else {
            if (response.data.resultCode === 10){
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "миша бида"
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSucces(captchaUrl));
    }
}



export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }

    }
}


export default authReducer;