import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Link, Outlet, createBrowserRouter } from 'react-router-dom'
import Error404 from '../components/layout/Error404'
import Root from '../components/layout/Root'
import ApiTest from '../pages/ApiTest'
import Home from '../pages/Home'
import MyTable from '../pages/MyTable'

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error404 />,
    handle: {
      name: 'Root',
    },
    children: [
      {
        path: '/home',
        element: <Home />,
        handle: {
          name: 'Home',
          icon: <PieChartOutlined />,
        },
      },
      {
        path: '/nested',
        element: <Outlet />,
        handle: {
          name: 'Nested',
          icon: <DesktopOutlined />,
          noLink: true,
        },
        children: [
          {
            path: '/nested/settings',
            element: <Home />,
            handle: {
              name: 'Settings',
            },
          },
        ],
      },
      {
        path: '/table',
        element: <MyTable />,
        handle: {
          name: 'Table',
          icon: <UserOutlined />,
        },
      },
      {
        path: '/api-test',
        element: <ApiTest />,
        handle: {
          name: 'Api',
          icon: <TeamOutlined />,
        },
      },
    ],
  },
]
export const router = createBrowserRouter(routes)
