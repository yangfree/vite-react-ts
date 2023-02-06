import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 添加css测试文件
import '@css/test_stylus.styl'
import '@css/test_less.less'
import '@css/test_sass.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
