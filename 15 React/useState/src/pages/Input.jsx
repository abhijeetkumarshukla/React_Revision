import { useState } from "react"

 

const Input = () => {
    const [input , setInput]= useState('')
     
     const handleChange =(e)=>{
       setInput(e.target.value)
     }
  return (
    <div>
        {input}
      <input type="text" placeholder="add text" onChange={handleChange} />
    </div>
  )
}

export default Input
