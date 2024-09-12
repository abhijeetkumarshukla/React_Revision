import { createContext,   useContext,   useState } from "react"

 
  const Theme2Context = createContext();

const Theme2 = ({children}) => {
        
    const [theme,setTheme] = useState('light');

    const ThemeToggle = ()=>{

        setTheme((prevToggle)=>(prevToggle=== "light" ? 'dark':'light'))
    }

  return (
    
    <Theme2Context.Provider value={{theme,ThemeToggle}}>
        {children}
    </Theme2Context.Provider>

  )
}

export default Theme2


export const Navbar = ()=>{

    const {theme, ThemeToggle} = useContext(Theme2Context);

    return(
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
        <h2>Navbar this is</h2>
        <button onClick={ThemeToggle}>  Toggle to {theme === 'light' ? 'Dark' : 'Light'} </button>
        </div>
    )
}


export const Footer = ()=>{

    const {theme} = useContext(Theme2Context);

    return(
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
        <h2>Footer this is</h2>
        
        </div>
    )
}
