import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const query = router.query

  return <p>Post: {query.good} </p>
}

export default Post