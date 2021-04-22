import Axios from "axios"

const instance = Axios.create({
    baseURL: 'wqeqewwq',
    withCredentials: true
})

instance.interceptors.request.use(config => {
    if (typeof window !== "undefined") {
        config.headers.Authorization = window.localStorage.getItem("token")
    }

    return config
})