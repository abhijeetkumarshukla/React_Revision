// import { useContext, useState } from "react";
// import { createContext } from "react"

 


// const ThemeContext = createContext();

// const ThemeProvider = ({children}) => {

//     const [theme,setTheme] = useState('light');

//     const toggleTheme =()=>{
//         setTheme((prevTheme)=>(prevTheme==='light'? 'dark':'light'))
//     }

//   return (
//       <ThemeContext.Provider value={{theme, toggleTheme}}>
//         {children}
//       </ThemeContext.Provider>
//   )
// }

// export default ThemeProvider


//  export const Navbar = () => {
//     const {theme, toggleTheme}= useContext(ThemeContext)

    
//   return (
//     <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
//       <h2>MY NAVBAR </h2>
//       <button onClick={toggleTheme}>
//         Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
//       </button>
//         </div>
//   )
// }

//  export const Footer = () => {
//     const {theme} = useContext(ThemeContext);
//   return (
    
//         <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
//       <h2>Footer content</h2>
//     </div>
     
//   )
// }
 