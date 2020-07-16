import * as axios from "axios";

const URL = "https://social-network.samuraijs.com/api/1.0/";

const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "bc8edd7a-1cd6-4f52-81e7-dff6464c7445"
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
        return (instanceAxios.get(`profile/${userId}`));
    }
};

export const authAPI = {
    me() {
        return (instanceAxios.get(`auth/me`));
    }
};
