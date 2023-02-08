import HomeApp from '../pages/HomeApp'
import { Outlet, Link, NavLink } from 'react-router-dom'
import navbarModuleCss from '../testcss/navbar.module.less'

export default function Root () {
  return (
    < >
      <nav className={navbarModuleCss.navbar}>
        <ul className={navbarModuleCss.navbar_ul}>
          <li>
            <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'red' : 'skyblue' })}> 首页 </NavLink>
          </li>
          <li>
            <Link to={'/about'}>关于</Link>
          </li>
          <li>
            <Link to={'/user'}>用户</Link>
          </li>
        </ul>
      </nav>
      <HomeApp />
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
