import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => {console.log("Increasing from value", counter); setCounter(counter + 1)}
  const decreaseByOne = () => {console.log("Decreasing from value", counter); setCounter(counter - 1)}
  const setToZero = () => {console.log("Setting to zero from value", counter); setCounter(0)}

  return (
    <>
      <Display counter = {counter}/>
      <Button handleClick={increaseByOne} text='plus'/>
      <Button handleClick={setToZero} text='zero'/>
      <Button handleClick={decreaseByOne} text='minus'/>

    </>
  )
}

export default App