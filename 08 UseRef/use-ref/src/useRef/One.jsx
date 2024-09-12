import { useRef, useState } from "react"

 

const One = () => {
    const RefElement = useRef('')
    const [text, setText]= useState('rahul')
    console.log(RefElement)

 const handleReset = ()=>{
     setText('')
     RefElement.current.focus()
     console.log(handleReset)
    }
    
    const handleInput =()=>{
     RefElement.current.style.color='red'
          console.log(handleInput)
 }
  return (
    <div>
      
      <input ref={RefElement} type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handleReset}>reset</button>
      <button onClick={handleInput}>input</button>
      <h2>{text}</h2>
    </div>
  )
}

export default One
