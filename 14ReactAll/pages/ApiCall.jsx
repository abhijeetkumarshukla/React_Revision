import { useEffect, useState } from "react"
import axios from 'axios'
 

const ApiCall = () => {
    const [data , setData] = useState([])

     useEffect(()=>{
        const Url ='https://jsonplaceholder.typicode.com/users'

        axios.get(Url)
        .then(res=>setData(res.data))
        .catch(err=>console.error(err))
     },[])

      

  return (
    <div style={{width:'420px',border:'2px solid black'}}>
      {data.map((ele)=>(
        <div key={ele.id} style={{width:'420px', border:'2px solid black', textAlign:'center'}}>
             <h3>{ele.id}</h3>
             <h2 >{ele.name}</h2>
             <h2 >{ele.username}</h2>
             <h2 >{ele.email}</h2>
             <h2 >{ele.phone}</h2>
        </div>
      ))}
    </div>
  )
}

export default ApiCall
