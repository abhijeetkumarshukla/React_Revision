import axios from 'axios'
import { useState } from 'react'

function Signup() {

    const [isTrue, setIsTrue] = useState(false)
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        role:""
    })
    const onClickBTN = (userRole) =>{
        setFormData((prev)=>({...prev,role:userRole}))
        if(userRole=="recruiter"){

            setIsTrue(true)
        }else{
            
            setIsTrue(false)
        }
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({...prev,[name]:value}))

    }

    const handleSubmit  = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/user/register",formData )
            console.log("res=?> ", res)
        } catch (error) {
            console.log(error)
        }
        console.log("formData==> ", formData)
    }
  return (
    <div>
        <div
        >
            <button onClick={()=>onClickBTN("jobseeker")}>Jobseeker</button>
            <button onClick={()=>onClickBTN("recruiter")}>Recruiter</button>
        </div>
        <h1>Continuw with {!isTrue?"jobseeker":"recruiter"}</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' onChange={handleChange} name="name"/>
        <input type='email' placeholder='email' onChange={handleChange} name="email"/>
        <input type='text' placeholder='password' onChange={handleChange} name="password"/>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup
