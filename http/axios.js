import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
}

// 实例化axios
const instance = axios.create({
  timeout: 30000,
  headers: {
    get: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    token && (config.headers.Authorization = token)
    return config
  },
  err => {
    return Promise.error(err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      if (response.data.code === 511) {
        // 未授权调取授权接口
      } else if (response.data.code === 510) {
        // 未登录跳转登录页
        this.$router.push({ path: '/login', params: {} })
      } else {
        return Promise.resolve(response)
      }
    } else {
      return Promise.reject(response)
    }
  },
  err => {
    // 我们可以在这里对异常状态作统一处理
    if (err.response.status) {
      // 处理请求失败的情况
      // 对不同返回码对相应处理
      return Promise.reject(err.response)
    }
  }
)

export default instance