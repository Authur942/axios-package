# axios-package

**axios的二次封装**

## axios是什么？
axios 是一个轻量的 HTTP客户端

基于 XMLHttpRequest 服务来执行 HTTP 请求，支持丰富的配置，支持 Promise，支持浏览器端和 Node.js 端。自Vue2.0起，尤大宣布取消对 vue-resource 的官方推荐，转而推荐 axios。现在 axios 已经成为大部分 Vue 开发者的首选。

## 特性

- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换JSON 数据
- 客户端支持防御XSRF

## 基本使用

安装

```shell
// 项目中安装
npm install axios --S
// cdn 引入
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

导入

```js
import axios from 'axios'
```

发送请求

```js
axios({
  url:'xxx',    // 设置请求的地址
  method:"GET", // 设置请求方法
  params:{      // get请求使用params进行参数凭借,如果是post请求用data
    type: '',
    page: 1
  }
}).then(res => {
  // res为后端返回的数据
  console.log(res);
})
```

并发请求`axios.all([])`

```js
function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (res1, res2) {
    // res1第一个请求的返回的内容，res2第二个请求返回的内容
    // 两个请求都执行完成才会执行
}));
```