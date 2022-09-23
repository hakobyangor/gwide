import styles from './index.module.css'
import { useGetUserQuery } from '../api/user/user.gql.gen'
import { withApi } from '../api/client-api'
import { Button } from '@material-tailwind/react'

export function Index() {
  // const [{ data, fetching }] = useGetUserQuery({
  //   variables: { args: { id: 1 } }
  // })

  return (
    <div>
      <Button>asds </Button>
    </div>
  )
}

export default withApi(Index)
