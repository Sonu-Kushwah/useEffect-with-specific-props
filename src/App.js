import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './component/User';

function App() {
  const [count1,setCount1]=useState(1);
  const [count2,setCount2]=useState(10);

  return (
    <>
     <h3>UseEffect Hooks with specific props</h3>
     <User count1={count1} count2={count2}/>
     <button onClick={()=>setCount1(count1+1)}>Couner 1</button>
     <button onClick={()=>setCount2(count2+2)}>Counter 2</button>
    </>
  );
}

export default App;
