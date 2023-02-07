import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import AboutPage from './pages/About'
import UserPage from './pages/User'

// 添加状态管理
import { Provider } from 'react-redux'
import store from './store/index'

// 添加css测试文件
import '@css/test_stylus.styl'
import '@css/test_less.less'
import '@css/test_sass.scss'

// 路有管理
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/about',
          element: <AboutPage />
        },
        {
          path: '/user',
          element: <UserPage />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
