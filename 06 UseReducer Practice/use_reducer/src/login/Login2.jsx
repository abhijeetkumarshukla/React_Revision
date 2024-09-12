import { useReducer } from "react"

const initialvalue ={
    email:'',
    password:''

}
const reducer= (state,{type, payload})=>{
 switch (type) {
    case "Email": return({...state, email:payload});
    case "Password": return({...state, password:payload});
        
       
 
    default:
      return state;
 }
}

const Login2 = () => {

    const [credentials,dispatch]= useReducer(reducer, initialvalue)
     
   const handleSubmit =(e)=>{
     e.preventDefault()
    console.log('credentials', credentials)

   }


  return (
    <div>
      <form onSubmit={handleSubmit}>
       
       <input type='email' placeholder="write Email"  onChange={(e)=>dispatch({type:"Email",payload:e.target.value})}/>
       <input type='password' placeholder="write password"  onChange={(e)=>dispatch({type:"Password",payload:e.target.value})}/>
       <button type="submit">login</button>


      </form>
    </div>
  )
}

export default Login2
