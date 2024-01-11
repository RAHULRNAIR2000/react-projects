import React from 'react'
import Header from '../component/Header'
import Card from '../component/Card';
import '../App.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="section">
      <h1>About</h1>
      <Card heading="About" description="Hellow all this is about" />
       
      </div>
    </>
  )
}

export default About;