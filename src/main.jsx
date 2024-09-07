import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Marquee from './Components/Marquee'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>,
    <Marquee/>,
    <Footer />,
  </StrictMode>,
)
