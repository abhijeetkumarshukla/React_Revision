import { useState } from "react"


const Toggle1 = () => {
    const [toggle, setToggle] = useState(true)
  return (
    <div style={{backgroundColor: toggle ? 'red': 'green', width:'100vw',height:'100vh', display:'flex',
      justifyContent:'center',alignItems:'center'}}>
     <button onClick={()=>setToggle(!toggle)}>
     {toggle ? 'hide': 'show'}  Toggle
     </button>
    </div>
  )
}

export default Toggle1
