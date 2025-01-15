import { useState } from "react"

 

const Toggle = () => {
   const [toggle , setToggle] = useState(false)

  return (
     <div style={{backgroundColor: toggle ? 'red':"green" , width:'200px', height:'200px'}}>
        <button onClick={()=>setToggle(!toggle)}>{toggle? 'yellow':'pink'}</button>
     </div>
  )
}

export default Toggle ;
