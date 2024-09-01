import { useState } from "react"


const NameForm = () => {

    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        
        alert(`hello , ${name}`)
    }

  return (
     <form onSubmit={handleSubmit}  style={{display:'flex',alignItems:'center',
     flexDirection:'column',margin:'auto' , padding:'50px',
    gap:'10px',  width:'200px'}}>

        <input placeholder="name" onChange={(e)=>setName(e.target.value)} />
        <button type="submit">submit</button>
     </form>
  )
}

export default NameForm
