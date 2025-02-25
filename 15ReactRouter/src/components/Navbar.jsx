import { NavLink } from "react-router-dom"

 

const Navbar = () => {
  return (
    <div>
      <NavLink to={'/'}>HOME</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      <NavLink to={'/detail'}>Details</NavLink>
    </div>
  )
}

export default Navbar
