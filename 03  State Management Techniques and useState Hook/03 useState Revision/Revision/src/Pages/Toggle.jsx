import { useState } from "react"


 

const Toggle = () => {
    const [isVisible, setIsVisible] = useState(true);

 

  return (

    <div style={{background: isVisible?'orange':"green",
     width:'400px', height:'200px', margin:'auto', marginTop:'200px'
     ,display: 'flex',
     justifyContent: 'center', 
     alignItems: 'center', borderRadius:"10px" }}>
        <button onClick={()=>setIsVisible(!isVisible)}
           style={{background: isVisible?'red':"grey",
            border:'none',padding:'4px',borderRadius:"7px", }} >
            {isVisible ? 'Hide':'Show'} Button
        </button>

       
    </div>
  )
 
}

export default Toggle
