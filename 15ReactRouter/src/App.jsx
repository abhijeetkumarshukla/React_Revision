import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import PrivateRoute from './pages/PrivateRoute'

function App() {
 

  return (
    <>
      <Navbar/>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/detail/:id' element={<PrivateRoute> <Details/></PrivateRoute>}/>
    </Routes>
     
    </>
  )
}

export default App
