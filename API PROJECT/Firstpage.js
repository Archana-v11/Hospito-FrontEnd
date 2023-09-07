import React, { Component } from 'react'
import Link from '@mui/material/Link';
import './Firstpage.css'

export default class Loginlib extends Component {
  render() {
    return (
     
      
     <div class="full">
        <div class="navbar">
           
            <div class="icon">
               <h2 class="head">Hospital  &nbsp;Management System</h2> 
            </div> 
             
            <div class="menu">
                <ul>
                    
                    <li><Link href="#">HOME</Link></li>
                    <li><Link href="/login">LOGIN</Link></li>
                    <li><Link href="/signup">SIGNUP</Link></li>
                    <li><Link href="/details">DETAILS</Link></li>
                    
                </ul>
            </div>
           
            
      </div>
      <div class="content">

          {/*<h1>Web Design & <br/><span>Development</span><br/>Course</h1>*/}    
          <p class="para">Our Life is a Hospital
          <br/> &nbsp;in which every patient is
          <br/> &nbsp; possessed by a desire
          <br/> &nbsp; &nbsp; to change his Bed....</p>
            
         {/* <button class="bn"><a href="#">JOIN US</a></button>*/}
               
              {/*<div class="form">
                    <h2>Login Here</h2>
                    <input type="email" name="email" placeholder="Enter Email Here"/>
                    <input type="password" name="pw" placeholder="Enter Password Here"/>
                      
                    <button class="bnlog"><a href="./Login.html">Login</a></button>
                     
                    <p class="link">Don't have an account<br/>
                    <a href="./signup.html">Sign up</a> here</p>
                    
                    <div class="icons">
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                    </div>
    </div>*/}
            
      </div>
       
       <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"> </script>
  </div>
    )
  }
}