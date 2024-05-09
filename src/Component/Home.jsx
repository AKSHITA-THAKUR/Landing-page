import React from 'react'
import Navbar from "./Navbar";
import Poster from "./Poster";
import About from "./About";
import Team from "./Team";
import Promo from "./Promo";
import Work from "./Work";
import Progress from './Progress';
import Price from "./Price";
import Contact from './Contact';
import UserUseEffect from './UserUseEffect';
function Home() {
  return (
    <div>
    <Navbar></Navbar>
     <Poster></Poster>
     <About></About>
     <Team></Team>
     <Promo></Promo>
     <Work></Work>
     <Progress></Progress>
     <Price></Price>
     <Contact></Contact>
     <UserUseEffect></UserUseEffect>
    </div>
  )
}

export default Home
