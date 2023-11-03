import axios from 'axios'
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const Nav = useNavigate()

  const[logindata,setLogindata] = useState({
    email:"",
    password:""
})


const changeHandler = (e)=>{
    setLogindata({
        ...logindata , [e.target.name] : e.target.value
})
}

const Loginsubmit = ()=>{
    axios.post('https://authentication-api-obav.onrender.com/api/login',logindata)
    .then((res)=> {
        alert(res.data.msg);
        localStorage.setItem("token",res.data.token)
    })
    .catch((err)=>console.log(err))

    setLogindata({
        email:"",
        password:""
    })
    Nav("/")
}
return (
<div className="flex flex-col justify-center items-center absolute top-0 -z-10 h-screen bg-slate-900 w-full">
    <div className="bg-white text-center py-6 rounded-lg">
    <h1 className="text-[25px] font-bold">Login Page</h1>
    <div className="w-96">
        <form  className="flex flex-col my-4 px-6">
            <label className="flex flex-start text-lg mb-1">Name</label>
            <input className=" bg-slate-200 mb-8 py-3 px-3 rounded-xl outline-blue-600" type="text" name="email" value={logindata.email} placeholder='Email' onChange={changeHandler} required/>
            <label className="flex flex-start text-lg mb-1">Password</label>
            <input className=" bg-slate-200 mb-8 py-3 px-3 rounded-xl outline-blue-600" type='password' name='password' value={logindata.password} placeholder='Password' onChange={changeHandler} required/>
            <button className="text-white bg-blue-600 w-80 py-3 rounded-lg hover:bg-blue-800" type='submit' onClick={()=> Loginsubmit()} >Submit</button>
        </form>
    </div>
    </div>
</div>
)
}
export default LoginPage
