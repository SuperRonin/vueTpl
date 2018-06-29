/*
 * @Author: xuexingwei
 * @Date:   2017-09-29 09:30:47
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-09-30 09:51:47
 */

import Vue from 'vue'
import axios from 'axios'


// 根据不同环境设置对应的baseURL
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '/dev';
// } else if(process.env.NODE_ENV == 'wwwd'){
//     axios.defaults.baseURL = 'http://wwwd.bus365.cn';
// } else if(process.env.NODE_ENV == 'mraw'){
//     axios.defaults.baseURL = 'http://mraw.bus365.cn';
// } else {
//     axios.defaults.baseURL = 'http://www.bus365.com';
// }

if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/dev';
} else {
    axios.defaults.baseURL = document.location.origin;
}


axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 30e3;
// axios.defaults.retry = 4;
// axios.defaults.retryDelay = 1000;

const that = this
    //请求时的拦截
axios.interceptors.request.use(function(config) {
    //发送请求前做的处理
    // if (that.$store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //     config.headers.Authorization = `${that.$store.state.token}`;
    // }
    // config.headers.Authorization = '{"clienttype":"web","ordertoken":"undefined","clienttoken":"D58D15B967745BD2D63159E042777295DFF85CE8FEED608514E1E3272892DB6705C8C42242997D7922430D09E71BE5DBC791DF4544D2DC06070CC1AA72461B59468C343B10C26FEF85FC459CBB3D7815"}'
    return config
}, function(error) {
    //异常请求时作处理
    return Promise.reject(error)
})

// 响应时的拦截
axios.interceptors.response.use(function(response) {
    if (response.status == 200 && response.statusText == 'OK') {
        //返回响应时做一些处理
        return response.data
    }


}, function(error) {
    if (process.env.NODE_ENV == 'development') {
        console.log("%c歇会吧~", " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em")
    } else {
        throw Error('服务器异常')
    }

    // if(!error.response.status){
    //     alert('请求失败,没有状态码')
    // }
    //响应异常时做一些处理

    return Promise.reject(error)

})

Vue.prototype.$http = axios

// export default axios