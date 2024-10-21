import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navi = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navi('/')}>
          Back Home
        </Button>
      }
    />
  )
}

export default Error404
