import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER
});

instance.interceptors.request.use(
    function (config) {
        // 쿠키에서 토큰 가져오기
        const AUTH_TOKEN = document.cookie.split('=')[1];
        // console.log(AUTH_TOKEN)s

        if (config.url !== '/login' && config.url !== '/signup') {
            config.headers.Authorization = AUTH_TOKEN
        }
        return config;
    }
)

export default instance;