import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense, useContext, useState } from 'react'
import { CounterContext } from 'shared'

const RemoteCard = dynamic(() => import('user/pages/card'), { ssr: false })
const User = dynamic(() => import('user/pages/index'), { ssr: false })

export default function Home() {
  console.log(__webpack_share_scopes__)
  const [count, setCount] = useState(129)
  return (
    <div className={styles.container}>
      <Suspense fallback={'loading...'}>
        <button onClick={() => setCount(count + 1)}>add</button>
        <CounterContext.Provider value={{ count }}>
          <div style={{
            display: 'flex',
            gap: '20px',
          }}>
            {/* remote card */}
            <RemoteCard />
            {/* remote page */}
            <User />
            {/* local page */}
            <Consuming />
          </div>
        </CounterContext.Provider>
      </Suspense>


    </div>
  )
}

function Consuming() {
  const ctx = useContext(CounterContext)
  return (
    <div>
      <h1>[home]this is {ctx.count}!</h1>
    </div>
  )
}