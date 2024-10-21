import { ConfigProvider } from 'antd'
import type React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{ token: { colorPrimary: '#024ab1', borderRadius: 3 } }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </QueryClientProvider>
)

export default App
