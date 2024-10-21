import { LoadingOutlined } from '@ant-design/icons'
import { useDog } from '../api/sample'

const ApiTest = () => {
  const { data, isFetching } = useDog('200')
  return (
    <>
      {isFetching && <LoadingOutlined />}
      {!!data && (
        <div>
          <div>
            {data.status_code}
            {data.title}
          </div>
          <img
            style={{
              width: 300,
              objectFit: 'contain',
            }}
            src={data.image.jpg}
            alt={data.title}
          />
        </div>
      )}
    </>
  )
}

export default ApiTest
