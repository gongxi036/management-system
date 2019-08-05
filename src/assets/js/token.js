import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token-dev';  //  todo 增加环境标识

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
