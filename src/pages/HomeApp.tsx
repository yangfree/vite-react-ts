import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'

function HomeApp () {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React + Ts + Pnpm</h1>
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1) }}>
          count is {count}
        </button>
        </div>
    </div>
  )
}

export default HomeApp
