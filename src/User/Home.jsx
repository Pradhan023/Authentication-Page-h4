import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Nav = useNavigate()

  const[val,setval]=useState({
    value:"",
    btn:""
  })

  const token = localStorage.getItem("token")
  useEffect(()=>{
    if(token){
      axios.get('https://authentication-api-obav.onrender.com/api/',{headers:{"authorization":`Bearer ${token}`}}) //req.headers["authorization"] from server to get access the data of home page
      .then((res)=>{
        setval({
          value:res.data,
          btn:"LogOut"
        });
      })
      .catch((err)=>console.log(err))
    }
    else{
      setval({
        value:"Please Login To enjoy the content",
        btn:"SignIn"
      })
    }
  },[token,Nav])

  const handleClick = ()=>{
    localStorage.removeItem("token");
    Nav("/login-page")
  }
  return (
    <div className="bg-slate-900 h-screen w-full absolute -z-20 top-0 flex md:flex-col sm:flex-col gap-10 lg:justify-center items-center sm:px-4 sm:pt-28 md:pt-28 ">
      <h1 className="text-white text-[30px] font-bold" >{val.value}</h1>
      <button className="text-white h-fit border-2 border-blue-400 text-[25px] px-4 py-2 w-fit hover:bg-blue-600 rounded-2xl"  onClick={handleClick}>{val.btn}</button>
    </div>
  )
}

export default Home