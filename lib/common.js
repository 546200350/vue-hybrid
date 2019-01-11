import 'amfe-flexible';
import Vue from 'vue';
import axios from 'axios';
import utils from '../lib/utils';
import {
  Toast
} from 'vant';
console.log(process.env.NODE_ENV);
let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  // 开发时候的URL地址
  baseURL = `https://www.easy-mock.com/mock/5ae09c6435daaf40f7716b63/jyg_spa`;
} else {
  baseURL = '/bjcem/complaint-service';
}
// 请求默认配置
axios.defaults.baseURL = baseURL;
axios.defaults.headers['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// 拦截器
axios.interceptors.request.use((req) => {
  console.log(req);
  console.log('请求参数=>', req.url, req.data);
  Toast.loading({
    mask: true,
    message: '加载中...',
    duration: 0
  });
  return req;
});
axios.interceptors.response.use((res) => {
  console.log('返回值==>', res);
  Toast.clear();
  if (res.status === 200) {
    return res.data;
  }
  Toast.fail(res.data.msg);
  return Promise.reject(res);
}, (error) => {
  Toast.clear();
  Toast.fail(`${error}`);
  return Promise.reject();
});
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
Vue.config.productionTip = false;
Vue.prototype.$openWin = openWin;
Vue.prototype.$http = axios;
