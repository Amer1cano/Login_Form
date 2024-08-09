import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleLogin = (event)=>{
        event.preventDefault()
        fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                phone_number:phoneNumber,
                password:password
            }),
        })
        .then(response => response.json())
        .then(data=>{
            if(data?.success === true){
                localStorage.setItem("tokenbek", data?.data?.tokens?.accessToken?.token)
                toast.success(data?.message)
                navigate("/home")
                setTimeout(() => {
                    console.log('Timeout triggered: clearing token and navigating to login');
                    localStorage.removeItem('tokenbek');
                    toast.error('Session expired. You have been logged out.');
                    navigate('/');
                }, 15000);
            }
            else{
                toast.error(data?.message)
                
            }
            console.log(data, "data");
            
        })
        .catch(error=>{
            if(error?.message === 'Token expired'){
                localStorage.removeItem("tokenbek",)
            }
            console.log(error);
            
        })
        
        
    }
  return (

    <div className="
    bg-cosmos  bg-no-repeat bg-center bg-ful
    py-20
    max-md:bg-none
    ">

   
    <div className="
    m-auto
    pt-20
    w-[30rem]
    h-[28rem]
    bg-blue-600
    px-10 p-16
    rounded-xl

    ">
        <form className="
        grid grid-cols-1 gap-16
        "
        onSubmit={handleLogin}
        >
            <input onChange={e=>setPhoneNumber(e?.target?.value)}
            className="outline-none px-6 py-4 rounded-lg text-xl"
            type="text" required placeholder="Number" />
            <input onChange={e=>setPassword(e?.target?.value)}
            className="outline-none px-6 py-4 rounded-lg text-xl"
            type="password" required placeholder="Password" />
            <button
            className="bg-white px-6 py-4 rounded-lg text-xl"
            >Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Login