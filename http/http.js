import { axios } from './axios'

// get请求
export function httpGet ({
  url,
  params = {}
}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// post请求
export function httpPost ({ url, data = {}, params = {} }) {
  return new Promise((resolve, reject) => {
    axios({
      ·
      url,
      method: 'post',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          
        }
      }]
    })
  })
}