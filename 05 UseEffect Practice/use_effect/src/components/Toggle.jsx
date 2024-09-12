import { useState } from "react"

 

const Toggle = () => {
    const [toggle, setToggle] = useState(true);

  return (
    <div style={{backgroundColor: toggle?'red':'yellow', width:'100vw', height:'100vh'}}>
         <button onClick={()=>setToggle(!toggle)}  style={{backgroundColor: toggle?'pink':'grey'}}>
        {toggle ? 'show' : 'hide'} 
         </button>
    </div>
  )
}

export default Toggle
