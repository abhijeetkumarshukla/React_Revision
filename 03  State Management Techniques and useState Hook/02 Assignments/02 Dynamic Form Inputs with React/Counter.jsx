const { useState } = require("react")

function Counter (){
   const [count, setCount]= useState(0)

    return(
       <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count +1)}>start</button>
       </div>
    )
}