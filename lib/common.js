import 'amfe-flexible';
import Vue from 'vue';
import axios from 'axios';
import utils from '../lib/utils';
import {
  Toast
} from 'vant';
// console.log(process.env.NODE_ENV);
let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  // 开发时候的URL地址
  if (window.api) {

  } else {

  }
  baseURL = `http://${window.location.host}/`;
} else {
  baseURL = '/bjcem/complaint-service';
}
// 请求默认配置
axios.defaults.baseURL = baseURL;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// 拦截器
// axios.interceptors.request.use((req) => {
//   console.log(req);
//   console.log('请求参数=>', req.url, req.data);
//   Toast.loading({
//     mask: true,
//     message: '加载中...',
//     duration: 0
//   });
//   return req;
// });
// axios.interceptors.response.use((res) => {
//   console.log('返回值==>', res);
//   Toast.clear();
//   if (res.status === 200) {
//     return res.data;
//   }
//   Toast.fail(res.data.msg);
//   return Promise.reject(res);
// }, (error) => {
//   Toast.clear();
//   Toast.fail(`${error}`);
//   return Promise.reject();
// });
// 打开新页面，页面传值全部放到url
const openWin = (name, url, pageParam) => {
  if (pageParam) {
    url += '?' + utils.json2url(pageParam);
  }
  console.log(url);
  if (window.api) {
    api.openWin({
      name,
      url,
      pageParam
    });
  } else {
    window.location.href = url;
  }
};
// 网络请求封装
const httpServer = {
  get(url, params = {}) {
    return this.fetch(url, params, 'get');
  },
  post(url, params = {}) {
    return this.fetch(url, params, 'post');
  },
  fetch(url, params = {}, method) {
    const token = localStorage.token || "";
    let realUrl = baseURL + url;
    // 打印传入参数
    const info = {
      url: realUrl,
      data: params,
      token: token
    };
    console.log(JSON.stringify(info));
    Toast.loading({
      mask: true,
      message: '加载中...',
      duration: 0
    });
    // apicloud环境下，采用原生请求模式进行跨域请求
    if (window.api) {
      return new Promise((resolve, reject) => {
        api.ajax({
          url: realUrl,
          method: method,
          headers: {
            token: token
          },
          data: {
            values: params
          }
        }, (res, err) => {
          console.log(JOSN.stringify(res));
          Toast.clear();
          if (res && (!res.code || res.code == 200)) {
            resolve(res);
          } else {
            reject(res);
          }
        });
      }).catch((err) => {
        console.log(err);
        Toast.clear();
        Toast.fail(`${err}`);
      })
    } else { // 本地浏览器反向代理
      // 修改为反向代理链接
      realUrl = baseURL + 'proxy/' + url;
      return new Promise((resolve, reject) => {
        axios[method](realUrl, params).then((res) => {
          console.log(res);
          Toast.clear();
          resolve(res);
        }).catch((err) => {
          Toast.clear();
          Toast.fail(`${err}`);
          reject(err);
        });
      }).catch((err) => {
        console.log(err);
        Toast.clear();
        Toast.fail(`${err}`);
      })
    }
  }
}
Vue.config.productionTip = false;
Vue.prototype.$openWin = openWin;
Vue.prototype.$http = httpServer;
