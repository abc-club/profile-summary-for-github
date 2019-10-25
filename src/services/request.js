import fetch from 'dva/fetch';
require('es6-promise').polyfill();

const BASE = 'https://api.github.com'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/**
 * @desc 格式化一个对象为字符串如 name=pat&city_no=020&old=99;
 * @param data string
 * */
function parseParams(data) {
  if (data == null) {
    return '';
  }
  const list = [];
  for (const item in data) {
    list.push(`${item}=${data[item]}`);
  }
  return list.join('&');
}
function checkStatus(response, params) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }else{
    const errortext = codeMessage[response.status] || response.statusText;
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
  }
}


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request({url, header, method, data}) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    ...header
  }
  let options = {
    method:method,
    headers:headers,
    credentials: 'same-origin'
  }
  if(method === 'GET'){
    const query = parseParams(data);
    url = JSON.stringify(data)==="{}" ? url : `${url}?${query}`;
  }else{
    options.body = JSON.stringify(data)
  }
  let hostUrl = url.indexOf('http') < 0 ? `${BASE}/${url}` : url
  return fetch(hostUrl, options)
  .then(checkStatus)
  .then(response => {
    return response.json();
  })
  .catch(e => {
    const status = e.name;
    return {
      resultCode: status,
      errorDescription: 'error'
    }
  })
}
