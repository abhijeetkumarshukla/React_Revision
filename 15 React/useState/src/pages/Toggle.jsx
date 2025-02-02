import { useState } from "react"

 

const Toggle = () => {
    const [toggle,setToggle] = useState(true)


  return (
    <div style={{backgroundColor : toggle ? 'red': 'black', width:'400px', height:'400px' }}>
        <button onClick={()=>setToggle(!toggle)}>{toggle ? 'red':'black'}</button>
      
    </div>
  )
}

export default Toggle;
