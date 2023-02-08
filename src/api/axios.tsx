import axios, { type AxiosRequestConfig } from 'axios'

interface MyResponseType {
  code: number
  msg: string
  data: any
}

// 创建实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '/api' : '/api',
  timeout: 15000
})

/**
 * 请求拦截 可以做loding，token处理...
 */
axiosInstance.interceptors.request.use(
  config => {
    // 请求正确做一些处理
    return config
  },
  async error => {
    // 请求错误做些什么
    return await Promise.reject(error)
  }
)
/**
 * 响应拦截 关闭loading 对请求错误统一处理 对数据进行筛选
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    // 对响应错误做点什么
    switch (error.response?.status) {
      case 400:
        error.message = '请求错误(400)'
        break
      case 401:
        error.message = '未授权(401)'
        break
      case 403:
        error.message = '拒绝访问(403)'
        break
      case 404:
        error.message = '请求出错(404)'
        break
      case 408:
        error.message = '请求超时(408)'
        break
      case 500:
        error.message = '服务器错误(500)'
        break
      case 501:
        error.message = '服务未实现(501)'
        break
      case 502:
        error.message = '网络错误(502)'
        break
      case 503:
        error.message = '服务不可用(503)'
        break
      case 504:
        error.message = '网络超时(504)'
        break
      case 505:
        error.message = 'HTTP版本不受支持(505)'
        break
      default:
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        error.message = `连接出错(${error.response?.status})!`
    }
    return await Promise.reject(error)
  }
)

export const request = async (config: AxiosRequestConfig): Promise<MyResponseType> => {
  const { data } = await axiosInstance.request<MyResponseType>(config)
  data.code === 200 ? console.log(data.msg) : console.log(data.msg)
  return data
}
