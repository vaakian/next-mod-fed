import { useContext } from 'react'
import { CounterContext } from 'shared'

export default function Card() {
  const ctx = useContext(CounterContext)
  console.log(__webpack_share_scopes__)
  return (
    <div>
      <h1>this is {ctx.count}!</h1>
    </div>
  )
}
