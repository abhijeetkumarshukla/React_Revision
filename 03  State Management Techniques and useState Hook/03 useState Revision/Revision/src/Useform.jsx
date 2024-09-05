import { useState } from "react"

 

const Useform = () => {
    const [text, setText] = useState('')

    const formSubmit= (e)=>{
        e.preventDefault()

        alert(` ${ text },  hello `)
    }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="likh de bhai" />
        
     <button type="submit">click</button>
    {text}
      </form>
    </div>
  )
}

export default Useform
