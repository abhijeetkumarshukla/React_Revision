import { useReducer } from "react"

 const initialState ={
  email:'',
  password:''
 }

 const reducer = (state,action)=>{
    switch (action.type) {
      case 'Email': return{...state,email:action.payload}
        
      case'Password':return{...state,password:action.payload}
    
      default:
       return state;
    }
 }

const LoginReducer = () => {

const [credentials,dispatch] = useReducer(reducer, initialState)

const HandleSubmit=(e)=>{
  e.preventDefault()
  console.log('credentials',credentials)
  alert('login sussessful')
}

  return (
    <div>
      <form onSubmit={HandleSubmit}>
       <label>email</label>
       <input   placeholder="email" onChange={(e)=>dispatch({type:'Email',payload:e.target.value})} />

       <label>password</label>
       <input  type="password" placeholder="password"  onChange={(e)=>dispatch({type:'Password',payload:e.target.value})} />

       <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginReducer
