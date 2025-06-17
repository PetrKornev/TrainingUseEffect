import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LifecycleComponentFunc from './function/LifecycleComponentFunc';
import LifecycleComponentDidMount from './class/componentDidMount';
import LifecycleComponentDidUpdate from './class/componentDidUpdate';
import LifecycleComponentWillUnmount from './class/componentWillUnmount';

function App() {
  const [counter, setCounter] = useState(1);
  const incrementForDelete = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };
  const [showTimer, setShowTimer] = useState(true);
  return (
    <>
      <h1>Текущее значение : {counter}</h1>
      {counter % 5 === 0 ? <p>Оп, удален</p> : <LifecycleComponentFunc />}

      <button onClick={incrementForDelete}>Нажми на меня 5 раз</button>

      <LifecycleComponentDidMount />
      <LifecycleComponentDidUpdate />

      {showTimer && <LifecycleComponentWillUnmount />}
      <div>
        <button onClick={() => setShowTimer(!showTimer)}>
          {' '}
          {showTimer ? 'Скрыть таймер' : 'Показать таймер'}
        </button>
      </div>
    </>
  );
}

export default App;
