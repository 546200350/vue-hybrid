export default {
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
