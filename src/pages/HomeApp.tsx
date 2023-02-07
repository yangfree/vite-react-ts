import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/counterSlice'
import { type RootState } from '../store/index'

function HomeApp () {
  const count = useSelector((state: RootState) => state.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Vite + React + Ts + Pnpm</h1>
      <div className="card">
        { count }
        <button onClick={() => { dispatch(increment()) }}>
          increment++
        </button>
        <button onClick={() => { dispatch(decrement()) }}>
          decrement--
        </button>
        </div>
    </div>
  )
}

export default HomeApp
