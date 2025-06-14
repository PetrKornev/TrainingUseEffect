import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifecycleComponentFunc from './LifecycleComponentFunc'
import LifecycleComponent from './LifecycleComponent'


function App() {
  const [counter, setCounter] = useState(1)
  const incrementForDelete = () => {
    setCounter((oldCounter) => oldCounter + 1)
  }
  return <>
    <h1>Текущее значение : {counter}</h1>
    {counter % 5 === 0 ? <p>Оп, удален</p> : <LifecycleComponentFunc />}

    <button onClick={incrementForDelete}>Смэрть</button>
  </>
}

export default App
