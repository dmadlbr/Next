"use client"

import { useState } from "react"


export default function App(){
  const [counter,setCounter] = useState(0);
  return <div>
    <h2>count:{counter}</h2>
    <button onClick={()=>setCounter(counter+1)}>INCREMENT</button>
  </div>
} 



