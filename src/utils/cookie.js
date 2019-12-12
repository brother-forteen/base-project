/**
 * cookie操作工具
 */

'use strict';

// 过期时间 12小时
const maxAge = '-1';

export default {
// cookie 设置（ escape 用于字符串编码）
  setCookies: cookies => {
    cookies = cookies || {};
    for (let key in cookies) {
      if (!key) continue;
      document.cookie = key + '=' + escape(cookies[key]) + ';expires' + new Date(0).toUTCString() + ';path=/';
    }
  },
  // 根据key获取cookie对应的value
  getCookie: key => {
    let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
    let cookie = document.cookie.match(reg);
    if (cookie) {
      return unescape(cookie[2]);
    } else {
      return null;
    }
  },
  // cookie 中是否含有 keysArr 中所有 key
  hasCookies: keysArr => {
    for (let index in keysArr) {
      var arr; // eslint-disable-line no-unused-vars
      var reg = new RegExp('(^| )' + keysArr[index] + '=([^;]*)(;|$)');
      if (!(arr = document.cookie.match(reg))) return false;
    }
    return true;
  },
  // 清除 cookie 中所有 key
  clearCookies: () => {
    let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        document.cookie = keys[i] + '=0;expires' + new Date(0).toUTCString() + ';path=/';
      }
    }
  }
};
