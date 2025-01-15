import { useState } from "react"

 

const Counter = () => {
  
    const [count, setCount] = useState(0)
   
    const handleDec =()=>{
       if(count>0)
         setCount(count-1)
       
    }
     
   return (
     <>
       {count}
       <button onClick={()=>setCount(count+1)}>inc</button>
       <button onClick={handleDec}>dec</button>
     </>
  )
}

export default Counter
