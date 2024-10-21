import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Link, Outlet, createBrowserRouter } from 'react-router-dom'
import Root from '../components/layout/Root'
import ApiTest from '../pages/ApiTest'
import Home from '../pages/Home'
import MyTable from '../pages/MyTable'

export const routes = [
  {
    path: '/',
    element: <Root />,
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
          icon: <PieChartOutlined />,
        },
      },
      {
        path: '/api-test',
        element: <ApiTest />,
        handle: {
          name: 'Api',
          icon: <PieChartOutlined />,
        },
      },
    ],
  },
]
export const router = createBrowserRouter(routes)
