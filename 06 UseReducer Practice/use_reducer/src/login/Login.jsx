import {  useReducer } from "react"

 const initialState ={
    email:'',
    password:''
 }

 const reducer =(state, action)=>{
  switch (action.type) {
    case 'Email':
        return{...state, email:action.payload}
    case 'Password':
        return{...state, password:action.payload}    
      
  
    default:
       return state;
  }
 }

const Login = () => {

  const [credentials,dispatch] = useReducer(reducer, initialState);
   
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('credentials', credentials)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="email" placeholder="Type Email" onChange={(e)=>dispatch({type:'email',payload: e.target.value})} />
        <input type="password" placeholder="Type Password" onChange={(e)=> dispatch({type:'email',payload: e.target.value})}  />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
