import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';
export default function Signup() 
{
  const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[emailid,setEmailid]=useState('');
  const[phno,setPhno]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const list={firstname,lastname,emailid,phno,password,confirmpassword}
  const navigate=useNavigate('');

  const formHolder=(event)=>
  {
    axios.post("http://localhost:8080/signuppost",list).then((console.log(formHolder)))
    navigate("/details")
  }
  return (
    <div>
      <div className='img2'>
       <img src="http://st2.depositphotos.com/2065849/7859/i/450/depositphotos_78594982-Medical-drip-on-the-background-of-hospital-corridor.jpg" height="750px" width="1500px"/>
      </div>
      <div className='rectangle2'></div>
      <div className='head2'>
       <p>Create Account</p>
      </div>
      <div className='form2'>
       <form onSubmit={formHolder}>

      firstname &nbsp;&nbsp;: <input type="text200" value={firstname} placeholder="firstname...." onChange={(e)=>setFirstname(e.target.value)}/><br/><br/>

      lastname  &nbsp;: <input type="text200" value={lastname} placeholder="lastname...." onChange={(e)=>setLastname(e.target.value)}/><br/><br/>

      emailid   &nbsp;&nbsp; : <input type="text300" value={emailid} placeholder="email...." onChange={(e)=>setEmailid(e.target.value)}/><br/><br/>
       
      phno   &nbsp;: <input type="text300" value={phno} placeholder="phno..." onChange={(e)=>setPhno(e.target.value)}/><br/><br/>
       
      password  &nbsp;&nbsp;: <input type="Password400" value={password} placeholder="password...."onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      confirmpassword  &nbsp;&nbsp;: <input type="Password400"  value={confirmpassword} placeholder="confirm password...." onChange={(e)=>setConfirmpassword(e.target.value)}/><br/><br/>
       
      <button type="submit" class="but2">Create Account</button>
       </form>
      </div>
    </div>
  )
}