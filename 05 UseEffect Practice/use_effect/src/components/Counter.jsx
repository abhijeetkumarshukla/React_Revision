import { useState } from "react"

 

const Counter = () => {

  const [count,setCount] = useState(0)

  return (
    <div>
        <h3>Count:{count}</h3>
      <button onClick={()=>setCount(count +1)}>add</button>
      <button onClick={()=>setCount(count -1)}>sub</button>
    </div>
  )
}

export default Counter
