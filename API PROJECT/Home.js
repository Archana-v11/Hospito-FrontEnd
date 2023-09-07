import { Paper } from '@mui/material';
import './Home.css';
import React, { useState } from 'react'

import Popup from 'reactjs-popup'


export default function Home() {

    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[phno,setPhno]=useState('');
    const[gender,setGender]=useState('');
    const[problem,setProblem]=useState('');
    
    const paperStyle={padding:'20px 20px', width:1300,margin:"20px auto"}
  const[LoginDetails,setLoginDetails]=useState([]);
  
  const updatedb=(e)=>{
    const details={name,age,phno,gender,problem}
    fetch(`http://localhost:8080/patientput?id=${e}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("Detail Updated");
      // console.log(JSON.stringify(details));
      // console.log(e);

    })
}
  const deletesignup=async(id)=>{
    fetch(`http://localhost:8080/patientdelete?id=${id}`,{
      method: 'DELETE'
    }).then(response => {
        console.log("deleted")
      })
      .catch(error => {
        // handle the error
      })
    }
    const updateState=(list)=>
    {
        setName(list.name)
        setAge(list.age)
        setPhno(list.phno)
        setGender(list.gender)
        setProblem(list.problem)
        
        console.log(name,age,phno,gender,problem)
    }
  const getalldetails=(()=>{
    fetch("http://localhost:8080/patientget")
    .then(e=>e.json())
    .then((eve)=>{
      setLoginDetails(eve);
    })
  })

  return (
    <div className='details'>
    
        <button class="bt0" onClick={getalldetails}>View patient Details</button>
        
        {LoginDetails.map(post=>(
          <Paper className='list' elevation={10} sx={{ width: '75%' }} style={paperStyle} key={post.id}>
          
            name:&ensp;{post.name}&ensp;&ensp;&ensp;
            age:&ensp;{post.age}&ensp;&ensp;&ensp;
            phno:&ensp;{post.phno}&ensp;&ensp;&ensp;
            gender:&ensp;{post.gender}&ensp;&ensp;&ensp;
            problem:&ensp;{post.problem}&ensp;&ensp;&ensp;
            
            <br/>
            <Popup trigger=

                {<button class="editbt" onClickCapture={()=>{updateState(post)}}>Edit</button>
               
                } 
                modal nested>
                {
                  
                    close => (
                      <Paper className='model' elevation={15} style={paperStyle} key={post.id}>
                        <div className='modal'>
                            <div className='content'>

                            <form className='edit'>
        <p>name: <input type="text" value={name} placeholder="Name..."  onChange={(e)=>setName(e.target.value)} required/></p>
        <p>age: <input type="text" value={age} placeholder="Age..."   onChange={(e)=>setAge(e.target.value)} required/></p>
        <p>phno: <input type="text" value={phno} placeholder="Phno..."   onChange={(e)=>setPhno(e.target.value)} required/></p>
        <p>gender: <input type="text" value={gender} placeholder="Gender..."   onChange={(e)=>setGender(e.target.value)} required/></p>
        <p>problem: <input type="text" value={problem} placeholder="Problem..."  onChange={(e)=>setProblem(e.target.value)} required/></p>
        
        </form>

                            </div>

                            <div>
                          <center>
                                <button class="updatebt" onClick=

                                    {() => {updatedb(post.id);close()}}>

                                        Update

                                </button>
                                </center>
                            </div>

                        </div>
                      </Paper>
                    )

                }

            </Popup>

            {/* <button onClick={()=>{Edit(post)}}>Edit</button>&ensp;&ensp;&ensp; */}
            <button class="delbt" onClick={()=>{deletesignup(post.id);}}>Delete</button><br/>
          </Paper>
//onClick={Edit(post.find(item => item.id === post.id))}
        ))}
    </div>
  )
}