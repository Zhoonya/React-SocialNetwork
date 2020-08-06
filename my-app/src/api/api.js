import * as axios from "axios";

const URL = "https://social-network.samuraijs.com/api/1.0/";
const API_KEY = "bc8edd7a-1cd6-4f52-81e7-dff6464c7445";

const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: URL,
    headers: {
        "API-KEY": API_KEY,
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 50) {
        return (
            instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
                .then((response) => {
                    return response.data;
                })
        );
    },

    follow(userId) {
        return (instanceAxios.post(`follow/${userId}`));
    },

    unfollow(userId) {
        return (instanceAxios.delete(`follow/${userId}`));
    },

    getProfile(userId) {
        console.warn("Obsolete method. Please profileAPI object.")
        return profileAPI.getProfile(userId);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return (instanceAxios.get(`profile/${userId}`));
    },
    getStatus(userId) {
        return (instanceAxios.get(`profile/status/${userId}`));
    },
    updateStatus(status) {
        return (instanceAxios.put(`profile/status`, {status: status}));
    },
};

export const authAPI = {
    me() {
        return (instanceAxios.get(`auth/me`));
    },
    login(email, password, rememberMe, captcha) {
        return (instanceAxios.post(`auth/login`), {email, password, rememberMe, captcha})
    }
};
