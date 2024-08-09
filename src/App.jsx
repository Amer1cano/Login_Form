/* eslint-disable react-hooks/exhaustive-deps */
import { ToastContainer } from "react-toastify"
import Login from "./pages/loginForm/Login"
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/home/Home"
import { useEffect } from "react"


const App = () => {

  let tokenxon = localStorage.getItem('tokenbek')
  const navigate = useNavigate()
  useEffect(()=>{
    if(tokenxon?.includes("eyJhbGciOiJIUz")){
      navigate("/home")
    }
    else{
      navigate("/")
    }
  },[])

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
     
      <ToastContainer />
    </div>
  )
}

export default App