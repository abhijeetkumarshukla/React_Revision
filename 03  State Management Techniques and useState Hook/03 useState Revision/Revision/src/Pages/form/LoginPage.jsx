import { useState } from "react"

 

const LoginPage = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
 
    const handleSubmit=(e)=>{
        e.preventDefault();
        setName(console.log(name));
        setEmail(console.log(email));
        setPassword(console.log(password))

        alert(`login Done`)
    }

  return (
    <div  style={{ display:'flex' , justifyContent:'center' ,alignItems:'center', height:'100vh' , backgroundColor:'black'}}>
     
     <form onSubmit={handleSubmit} style={{ width:'300px', height:'220px',  display:'flex',
         flexDirection:'column', padding:'20px',  border:'1px solid black', borderRadius:'20px', background:'yellow' }}>
         <label style={{ marginLeft:'55px', padding:'2px'}}>UserName:</label>  
        <input placeholder="Name"  type="text" value={name} onChange={(e)=>setName(e.target.value)} 
        style={{padding:'6px', width:'60%' ,margin:'auto',  borderRadius:'5px', border:'none'}} /> <br />
        <label  style={{ marginLeft:'55px', padding:'2px'}}>Email:</label>
        <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
         style={{padding:'6px', width:'60%' ,margin:'auto',  borderRadius:'5px', border:'none'}}  /><br />
        <label  style={{ marginLeft:'55px', padding:'2px'}}>Password:</label>
        <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
         style={{padding:'6px', width:'60%' ,margin:'auto',  borderRadius:'5px', border:'none' }} /><br />

        <button type="submit"
         style={{padding:'6px', width:'60%' ,margin:'auto',  borderRadius:'5px', border:'none',cursor:'pointer', backgroundColor:'black', 
         color:'white', fontWeight:'600'}}>Sign In</button>
     </form>

    </div>
  )
}

export default LoginPage
