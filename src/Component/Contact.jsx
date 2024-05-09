import React from 'react'
import "./Contact.css"
import { useState} from 'react'
import axios from 'axios'
function Contact() {
 const [name , setName] = useState('');
 const [email , setEmail] = useState('');
 const [subject , setSubject] = useState('');
 const [message , setMessage] = useState('');
 

 const handleEmail = (e) => {
    setEmail(e.target.value)
   }

   const handleClear = (e) => {
   setName('')
   setEmail('')
   setMessage('')
   setSubject('')

   
   }

const handleName = (e) => {
 setName(e.target.value)
}

const handleSubject = (e) => {
    setSubject(e.target.value)
   }

   const handleMessage = (e) => {
    setMessage(e.target.value)
   }

const handleClick = async(e) => {

e.preventDefault();
const data = {
name , email , subject , message

};
try{
    const response = await axios.post("https://dummy.restapiexample.com/api/v1/create" , data) ;
    console.log("response" , response)
}
catch( error){
   console.error("Error" , error.message)
}
}






    return (
        <div className='Contact'>
            <div className='inner_container'>
            <div className='about'>
                <h2>CONTACT</h2>
                <center>
                <p style={{fontSize : "20px"}}>Lets get in touch.Send us a message</p>
                </center>
            </div>
            <div className='contact-box'>
            <div className='icon-box'>
                <div className='contact_Icon'>
                    <img src="../image/location.jpg" />
                    <p>Location</p>
                </div>
                <div className='contact_Icon'>
                    <img src="../image/telephone.jpg"></img>
                    <p>Phone</p>
                </div>
                <div className='contact_Icon'>
                    <img src="../image/mail.jpg"></img>
                    <p>Emails</p>
                </div>
            </div>
            <div className='contact_form'>
               {name}
                <input onChange={handleName} value={name} placeholder='Name' type='text' />
                <br></br>
                <input onChange={handleEmail} value={email} placeholder='Email' type='text' />
                <br></br>
                <input  onChange={handleSubject} value={subject} placeholder='Subject' type='text' />
                <br></br>
                <input onChange={handleMessage} value={message} placeholder='Message' type='text' />
                <br></br>
                <button onClick={handleClick} className='btn'> View Our Works</button>
                <button  onClick={handleClear}>clear Message</button>
            </div>
            </div>
            <div className='city_img'>
                <img src='../image/city.png' />
            </div>
            </div>      
        </div>
    )
}

export default Contact