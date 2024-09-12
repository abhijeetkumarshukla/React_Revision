// import { useRef } from "react"

  import { useState } from "react"


const Two = () => {

     const [count , setCount]= useState(0);

// const RefCount = useRef(0)

// const handleCount=()=>{
//     RefCount.current +=1;
  
//     console.log(RefCount.current)
// }

const handleClick=()=>{
    console.log(setCount(count+1))
}

  return (
    <div>
         
      {/* <button onClick={handleCount}>inc</button> */}
      <button onClick={handleClick}>inc</button>
    </div>
  )
}

export default Two
