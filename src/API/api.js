import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "af8210fd-6f1f-4bf4-bc0c-c906132f4655"
    }
});

 
export const getUsers = (currentPage, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
export const followAPI = (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
export const unfollowAPI = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data);
}

export const getProfile = (userId) => {
    return instance.get(`profile/` + userId)
}

export const authAPI = {
    me  ()  {
        return instance.get(`auth/me`)
    },
    login  (email, password, rememberMe = false, captcha = null)  {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout  ()  {
        return instance.delete(`auth/login`);
    },

}

export const getStatusAPI = (userId) => {
    return instance.get(`profile/status/` + userId)
}

export const updateStatusAPI = (status) => {
    return instance.put(`profile/status/`, {
        status: status
    });
}

export const savePhotoAPI = (file) => {

    const formData = new FormData();
    formData.append('image', file);
    return instance.put(`profile/photo/`, formData, { headers: {
        'Content-Type': 'multipart/form-data'
        }});
}

export const saveProfileAPI = (profile) => {
    return instance.put(`profile`, profile);
}

export const securityAPI = {
    getCaptchaUrl ()  {
        return instance.get(`security/get-captcha-url`)
    }

}