import React from 'react'
import Header from '../component/Header'
import Card from '../component/Card';
import '../App.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="section">
        
        <div className='container section1 text-center'>
      <h1 style={{fontSize:"50px",paddingBottom:"46px"}}>ABOUT</h1>
      
      <p>Welcome to BEYOND your premier destination for discovering authentic user reviews of newly launched headphones. Dive into a curated collection of insights from real users to make an informed choice and elevate your audio experience.</p>
      
       </div>
      </div>
    </>
  )
}

export default About;