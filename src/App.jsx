import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    setCounter(counter +1)
    console.log(counter)
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleClick}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </>
  )
}

export default App