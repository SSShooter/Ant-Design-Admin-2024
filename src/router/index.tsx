import { createBrowserRouter, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Root from '../components/layout/Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
])
