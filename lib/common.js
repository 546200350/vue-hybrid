const common = {
  headurlMock: "https://www.easy-mock.com/mock/5ae09c6435daaf40f7716b63/jyg_spa/",
  headurl: "http://www.realurl.com/",
  EVN: "DEV",// 当前环境:PRODUCT、DEV
  isApiEnvironment: false, //是否是apicloud环境
  // 数据请求
  fetch(url, option = {}) {
    var modEl = document.getElementById('progressModal');
    modEl.style.display = 'inherit';
    // 拼接url
    if (this.EVN === "PRODUCT") {
      url = this.headurl + url;
    } else {
      url = this.headurlMock + url;
    }
    var token = localStorage.token || "";
    var token = "a1HS6EZYq6d7xqD5p-dUZOMdkVrpd6vf";
    // 判断浏览器环境
    if (this.isApiEnvironment) {
      // 打印传入参数
      var info = {
        url: url,
        data: option.data || {},
        token: token
      };
      console.log(JSON.stringify(info));
      return new Promise((resolve, reject) => {
          api.ajax({
            url: url,
            method: option.method || "GET",
            headers: {
              token: token,
              "Content-Type": "application/json"
            },
            data: {
              body: option.data || {}
            }
          }, function (res, err) {
            modEl.style.display = 'none';
            console.log(res);
            if (res && (!res.code || res.code == 200)) {
              resolve(res);
            } else {
              reject(res);
            }
          });
        }
      ).catch((err) => {
        console.log(err);
        alert("err:" + JSON.stringify(err));
      })
    } else {
      // GET请求参数放到url中
      if ((!option.method || (option.method === "GET" || option.method === "get")) && option.data) {
        url += '?' + this.json2url(option.data);
      }
      // 打印传入参数
      var info = {
        url: url,
        data: option.data || {},
        token: token
      };
      console.log(JSON.stringify(info));
      return new Promise((resolve, reject) => {
        fetch(url, {
          headers: new Headers({
            // 'Content-Type': 'application/x-www-form-urlencoded', // 指定提交方式为表单提交
            token: token
          }),
          method: option.method || "GET",
          // get请求不能在body中传数据
          body: (option.method === "GET" || !option.method) ? {} : (this.json2url(option.data) || {})
        }).then((res) => res.json()).then((res, err) => {
          console.log(res);
          modEl.style.display = 'none';
          if (res && (!res.code || res.code == 200)) {
            resolve(res);
          } else {
            reject(res);
          }
        }).catch((err) => {
          modEl.style.display = 'none';
          reject(err);
        });
      }).catch((err) => {
        alert(JSON.stringify(err));
      })
    }
  },
  //页面初始加载获取数据（初始加载apiready可能还未触发，顾单独提取）已废弃！！！！
  initData(callback) {
    if (this.isApiEnvironment) {
      window.apiready = () => {
        callback();
      }
    } else {
      callback();
    }
  },
  //初始化调用api对象（初始加载apiready可能还未触发，api对象还未赋值）已废弃！！！！
  initApi() {
    var pm = new Promise((resolve, reject) => {
        if (window.api) {
          resolve(window.api);
        } else {
          window.apiready = () => {
            resolve(window.api);
          }
        }
      }
    );
    return pm;
  },
  //获取购物车
  getCarList() {
    return this.getLocal('carlist');
  },
  // 加入购物车
  addToCar(data) {
    var carlist = this.getLocal('carlist');
    if (carlist) {
      carlist.push(data);
      this.setLocal('carlist', carlist);
    } else {
      this.setLocal('carlist', [data]);
    }
    if (this.isApiEnvironment) {
      api.sendEvent({
        name: 'refreshCar'
      });
    }
  },
  // 打开新页面，页面传值全部放到url
  openWin(obj) {
    if (obj.pageParam) {
      obj.url += '?' + this.json2url(obj.pageParam);
    }
    console.log(obj.url);
    if (window.api) {
      api.openWin(obj);
    } else {
      window.location.href = obj.url;
    }
  },
  // 兼容性获取参数
  getPageParam() {
    if (window.api) {
      return api.pageParam;
    } else {
      return this.url2json();
    }
  },
  url2json() {
    var url = window.location.href;
    var index = -1,
      str = '',
      arr = [],
      length = 0,
      res = {};
    if (url.indexOf('?') != -1) {
      index = url.indexOf('?');
      str = url.substring(index + 1);
      arr = str.split('&');
      for (var i = 0; i < arr.length; i++) {
        res[decodeURIComponent(arr[i].split('=')[0])] = decodeURIComponent(arr[i].split('=')[1]);
      }
    } else {
      res = {};
    }
    return res;
  },
  json2url(obj) {
    if (obj) {
      return Object.keys(obj).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
      }).join("&");
    } else {
      return "";
    }
  }
}
export default common;
