import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function RegisterPage() {
    const[regdata,setRegdata] = useState({
        name:"",
        email:"",
        password:""
    })
    
    const Nav = useNavigate()
   
    const changeHandler = (e)=>{
        setRegdata({
            ...regdata , [e.target.name] : e.target.value
    })
    }

    const Regsubmit = ()=>{
            axios.post('https://authentication-api-obav.onrender.com/api/register',regdata)
            .then((res)=> {
                alert(res.data.msg);
                localStorage.setItem("token",res.data.token)
            })
            .catch((err)=>console.log(err))

        setRegdata({
            name:"",
            email:"",
            password:""
        })
        Nav('/')
    }
  return (
    <div className="flex flex-col justify-center items-center absolute top-0 -z-10 h-screen bg-slate-900 w-full ">
        <div className="bg-white text-center py-6 rounded-lg">
            <h1 className="text-[25px] font-bold">Register Page</h1>
            <div className="w-96">
                <form onSubmit={(e)=> e.preventDefault} className="flex flex-col my-4 px-6">
                <label className="flex flex-start text-lg mb-1">Name</label>
                    <input className=" bg-slate-200 mb-8 py-3 px-3 rounded-xl outline-blue-600" type='name' name='name' value={regdata.name} placeholder='Enter Your Name' onChange={changeHandler} required />
                    <label className="flex flex-start text-lg mb-1">Email</label>
                    <input className=" bg-slate-200 mb-8 py-3 px-3 rounded-xl outline-blue-600" type="email" name="email" value={regdata.email} placeholder='Enter Your Email' onChange={changeHandler} required />
                    <label className="flex flex-start text-lg mb-1">Password</label>
                    <input className=" bg-slate-200 mb-8 py-3 px-3 rounded-xl outline-blue-600" type='password' name='password' value={regdata.password} placeholder='Enter Your Password' onChange={changeHandler} required />
                    <button className="text-white bg-blue-600 w-80 py-3 rounded-lg hover:bg-blue-800" type='submit' onClick={()=> Regsubmit()} >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
