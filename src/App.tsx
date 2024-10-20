import React from 'react'
import { ConfigProvider } from 'antd' 
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './App.css'

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}> 
    <RouterProvider router={router} />
  </ConfigProvider>
)

export default App
