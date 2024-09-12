import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Theme2 from './Theme2.jsx'
// import ThemeProvider from './ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
 <Theme2>
   <App />
 </Theme2>
  
)
