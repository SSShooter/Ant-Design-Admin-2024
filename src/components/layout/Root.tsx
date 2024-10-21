import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import type React from 'react'
import { useState } from 'react'
import { NavLink, Outlet, Router, useMatches } from 'react-router-dom'
import LeftMenu from './LeftMenu'

const { Header, Content, Footer, Sider } = Layout

const Root: React.FC = () => {
  const matches = useMatches()
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            margin: 16,
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          SysName
        </div>
        <LeftMenu />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content
          style={{ margin: '0 16px', display: 'flex', flexDirection: 'column' }}
        >
          <Breadcrumb
            style={{ marginTop: '16px' }}
            items={matches.map((match) => {
              // console.log(match)
              const { pathname, handle } = match
              const data = handle as { name: string; noLink?: boolean }
              return {
                title: data.noLink ? (
                  data.name
                ) : (
                  <NavLink
                    to={pathname}
                    className={({ isActive, isPending }) =>
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }
                  >
                    {data?.name || '--'}
                  </NavLink>
                ),
              }
            })}
          />
          <div
            style={{
              padding: 24,
              margin: '16px 0',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              flexGrow: 1,
              overflow: 'auto',
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Root
