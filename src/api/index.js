/**
 * @createDate: 2019/12/11
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

import Axios from 'axios';

const AXIOS_INSTANCE = Axios.create({
    timeout: 10000,
    baseURL: ''
});

// 请求拦截器
AXIOS_INSTANCE.interceptors.request.use(
    (config) => {
        // 在发送之前做些什么
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        };

        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
AXIOS_INSTANCE.interceptors.response.use(
    (response) => {
        // 对请求返回的数据做处理
        // 状态码处理
        return response;
    },
    (error) => {
        // 错误提示
        return Promise.reject(error);
    }
);

export { AXIOS_INSTANCE };
