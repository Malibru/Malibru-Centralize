import { useState } from 'react'
import './App.css'
// import Header from './components/header/header.jsx'
// import MainContent from './components/MainContent.jsx'
import Layout from './pages/Layout.jsx'
import "./assets/css/incialpage.css";
import "./assets/css/header.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
   
  )
}

export default App

  
     
      
      
   

