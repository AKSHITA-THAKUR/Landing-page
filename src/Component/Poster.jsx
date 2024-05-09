import React from 'react'
import Navbar from './Navbar'
import "./Poster.css"
const Poster = () => {
  return (
    <div className='poster'>
    <Navbar/>
      <img src='../image/laptop.jpg' alt='poster'></img>
      <div className='test'>
       <h1>Start Something that matters</h1>
      <p> Stop asting valuable time with projects that just isnt you</p>
      <button> Learn more and start today</button>
      </div>
    </div>
  )
}

export default Poster
