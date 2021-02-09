import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'


const HomePage = ({ data }) => {
  const [stateData, setStateData] = useState('')

  useEffect(() => {
    const fetching = async () => {
      await axios.get('https://api.github.com/repos/vercel/next.js')
        .then((res) => setStateData(res.data))
    }
    fetching()
  }, [])
  return <div>
    <div className="homepage--container">
      Welcome to Next.js
    </div>
    <Link href='/about'>
      <a> Click this and go to About Page</a>
    </Link>

    <div>
      {data}
    </div>
    <div>
      {stateData && stateData.forks}
    </div>
  </div>
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const posts = await res.json()
  return {
    props: {
      data: posts.stargazers_count,
    },
  }
}


export default HomePage