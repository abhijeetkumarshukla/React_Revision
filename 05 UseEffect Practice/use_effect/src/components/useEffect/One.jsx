import axios from "axios";
import { useEffect, useState } from "react"

 

const One = () => {

    const [data,setData] = useState([]);

     useEffect(() => {
        const URL = 'https://jsonplaceholder.typicode.com/posts'  
         
          axios.get(URL)
         .then(res=>setData(res.data))
         .catch(err => console.error(err));

     },[])   
 
  return (
    <div>
        { data.map((ele)=>(
          <h3 key={ele.id}>{ele.title}</h3>
             ))}
    </div>
  )
}

export default One
