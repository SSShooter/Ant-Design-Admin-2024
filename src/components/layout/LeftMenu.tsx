import { Menu, type MenuProps } from 'antd'
import { routes } from '../../router'
import { NavLink } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]
const LeftMenu = () => {
  const items: MenuItem[] = routes[0].children.map((route) => {
    const handle = route.handle as { name: string }
    return {
      key: route.path,
      label: route.children ? (
        handle.name
      ) : (
        <NavLink
          to={route.path}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          {handle.name}
        </NavLink>
      ),
      icon: route.handle?.icon,
      children: route.children?.map((child) => {
        const handle = child.handle as { name: string }
        return {
          key: child.path,
          label: (
            <NavLink
              to={child.path}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              {handle.name}
            </NavLink>
          ),
        } as MenuItem
      }),
    } as MenuItem
  })
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
    />
  )
}
export default LeftMenu
