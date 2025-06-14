import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [state, setState] = useState(() => 3 + 2);
  console.log(state);
  
  return <>



  </>
}

export default App
