import React from 'react'
import Header from '../component/Header'
import Card from '../component/Card';
import '../App.css';

const Contact = () => {
  return (
    <>
    <Header />
    <div className="section">
      <h1>Contact</h1>
      <Card heading="Contact" description="Hellow all this is contact" />
       
      </div>
    </>
  )
}

export default Contact